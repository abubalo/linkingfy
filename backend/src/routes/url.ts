import express from "express";
import {generate, allUrls, specificUrl, updateUrl, deleteUrl} from "../controllers/urlControllers"
const router = express.Router();

// Create url
router.post("/generate", generate);

// Get all url
router.get("/all-urls", allUrls);

// Get specific url
router.get("/url:id", specificUrl);

// Update Url
router.put("/url:id", updateUrl);

// Delete Url
router.delete("/url:id", deleteUrl);

const urlRouter = router;

export default urlRouter;
