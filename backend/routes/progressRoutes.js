import express from "express";
import { authenticateJWT } from "../middleware/authenticateJWT.js";
import { getProgressForCourse, markSectionComplete, updateWatchedVideo } from "../controller/userAssessment.js";


const router = express.Router();

// Update watched video progress
router.post("/watch", authenticateJWT, updateWatchedVideo)

// Mark section complete (requires watched all videos + passed assessment)
router.post("/complete-section", authenticateJWT, markSectionComplete);
router.get("/:courseId", authenticateJWT, getProgressForCourse)
export default router