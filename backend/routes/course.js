import express from 'express';
import multer from 'multer';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  addVideoToSection,
  addSectionToCourse,
  removeSectionFromCourse,
  getSectionById, // <-- import the new controller
} from '../controller/course.js';
import { createAssessmentWithQuestions, updateAssessmentWithQuestions, deleteAssessment } from '../controller/assessment.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// course routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

// section routes
router.get('/section/:sectionId', getSectionById);
router.post('/:courseId/sections', addSectionToCourse);
router.delete('/:courseId/sections/:sectionId', removeSectionFromCourse);

// Add video to section: supports file upload or URL
router.post('/:courseId/sections/:sectionId/videos', upload.single('video'), addVideoToSection);

// Add assessment to course
router.post('/assessment/create', createAssessmentWithQuestions);
router.put('/assessment/update/:assessmentId', updateAssessmentWithQuestions);
router.delete('/assessment/delete/:assessmentId', deleteAssessment);

export default router;
