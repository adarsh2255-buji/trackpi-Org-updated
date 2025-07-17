import Course from '../models/Course.js';

// Create a new Course
export const createCourse = async (req, res) => {
    try {
        const { title, thumbnail, duration, sections } = req.body;
        const newCourse = new Course({ title, thumbnail, duration, sections });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        // res.status(500).json({ message: 'Failed to create course', error });
        console.error('[CREATE COURSE ERROR]', error);
        res.status(500).json({ message: 'Failed to create course', error: error.message || error });
    }
};

// Get all Courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch courses', error });
    }
};

// Get single Course by ID
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error });
    }
};

// Update Course
export const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update course', error });
    }
};

// Delete Course
export const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete course', error });
    }
};

//add a section to a course
export const addSectionToCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title, duration, assessmentId } = req.body;
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        course.sections.push({ title, duration, assessmentId });
        await course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add section', error });
    }
}

//remove a section from a course
export const removeSectionFromCourse = async (req, res) => {
    try {
        const { courseId, sectionId } = req.params;
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        course.sections.id(sectionId).remove();
        await course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove section', error });
    }
}

// Add video to a section (supports file upload or URL)
export const addVideoToSection = async (req, res) => {
    try {
        const { courseId, sectionId } = req.params;
        let { title, desc, url } = req.body;
        // If a file is uploaded, use its path as the video URL
        if (req.file) {
            url = req.file.path;
        }
        if (!url) {
            return res.status(400).json({ message: 'Video URL or file is required' });
        }
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        const section = course.sections.id(sectionId);
        if (!section) return res.status(404).json({ message: 'Section not found' });
        section.videos.push({ title, desc, url });
        await course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add video', error });
    }
};

