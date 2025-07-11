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
} from '../controller/course.js';

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
router.post('/:courseId/sections', addSectionToCourse);
router.delete('/:courseId/sections/:sectionId', removeSectionFromCourse);

// Add video to section: supports file upload or URL
router.post('/:courseId/sections/:sectionId/videos', upload.single('video'), addVideoToSection);

export default router;
