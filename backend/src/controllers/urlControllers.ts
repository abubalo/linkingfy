import { Request, Response } from "express";
import Url from "../models/Url";
import verifyToken from "../utils/auth";
import { IVerifyToken, IUrl } from "../interface/interface";

export const generate = async (req: Request, res: Response) => {
  const { originalUrl, shortUrl, userId } = req.body;
  const userIdToken: IVerifyToken = await verifyToken(req);

  if (userIdToken) {
    try {
      const url = await Url.create({
        originalUrl,
        shortUrl,
        userId,
      });

      res.status(201).json(await url);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

export const allUrls = async (req: Request, res: Response) => {
  const userIdToken: IVerifyToken = await verifyToken(req);

  if (userIdToken) {
    try {
      const userUrls = await Url.find({ userId: userIdToken });
      res.status(200).json(userUrls);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

export const visitingUrl = async (req: Request, res: Response) => {
  const { shortUrl } = req.body;
  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateUrl = async (req: Request, res: Response) => {
  const userIdToken: IVerifyToken = await verifyToken(req);

  if (userIdToken) {
    try {
    } catch (error) {}
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
  res.json("");
};

export const analytics = async (req: Request, res: Response) => {
  const userIdToken: IVerifyToken = await verifyToken(req);

  if (userIdToken) {
    try {
      const clicksByUser = await Url.aggregate([
        {
          $match: { userId: userIdToken },
        },
        {
          $group: {
            _id: "$userIdToken",
            clickCount: { $sum: "$clickCount" },
          },
        },
      ]);

      res.status(200).json(clicksByUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
