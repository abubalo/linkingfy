import express from "express";
import {generate, allUrls, updateUrl, deleteUrl, visitingUrl, analytics} from "../controllers/urlControllers"
const router = express.Router();

// Create url
router.post("/generate", generate);

// Get all url
router.get("/all-urls", allUrls);



// Update Url
router.put("/url", updateUrl);

// Delete Url
router.delete("/url", deleteUrl);

// Get analytcis
router.get("/analytics", analytics);

const urlRouter = router;

export default urlRouter;
