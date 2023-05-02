import { Request, Response } from "express";
import Url from "../models/Url";
import verifyToken from "../middleware/auth";
import { IVerifyToken } from "../interface/interface";
import verifyUserId from "../middleware/verifyUserId";

export const generate = async (req: Request, res: Response) => {
  const { originalUrl, shortUrl, userId } = req.body;
  // const userIdToken: IVerifyToken = await verifyToken(req);

  // if (userIdToken) {
  try {
    const existingUrl = await Url.findOne({ shortUrl });

    if (existingUrl) {
      res.status(409).json("Url already created");
    }
    const url = await Url.create({
      originalUrl,
      shortUrl,
      userId,
    });

    res.status(201).json(await url);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
    // }
  }
};

export const allUrls = async (req: Request, res: Response) => {
  const userIdToken: IVerifyToken = await verifyToken(req);

  if (userIdToken) {
    try {
      const userUrls = await Url.find({ userId: userIdToken });
      res.status(200).json(userUrls);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error);
    }
  }
};

export const visitingUrl = async (req: Request, res: Response) => {
  const { shortUrl } = req.params;
  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ error: "tyURL not found" });
    }

    const originalUrl = url.originalUrl;
    res.redirect(originalUrl);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUrl = async (req: Request, res: Response) => {
  const isUserExists = await verifyUserId(req);

  const { id, originalUrl, newUrl, userId } = req.body;
  
  if (isUserExists) {
    try {
      const url = await Url.findOne({ _id: id, });

      if (url) {
        (url.originalUrl = originalUrl),
          (url.shortUrl = newUrl),
          await url.save();
        res.status(200).json("Url updated successfully");
      } else {
        res.status(400).json("Url not found");
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error);
    }
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const url = await Url.findByIdAndDelete({ id });

    if (!url) {
      res.status(400).json("No url matches");
    }

    res.status(200).json("Successfullt deleted url!");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
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
      console.log(error.message);
      res.status(500).json(error);
    }
  }
};
