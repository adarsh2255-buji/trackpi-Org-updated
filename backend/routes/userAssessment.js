import express from "express";
import { submitAssessment } from "../controller/userAssessment.js";

const router = express.Router();

router.post("/submit", submitAssessment);

export default router;
