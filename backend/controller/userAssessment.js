import Course from "../models/Course.js";
import Progress from "../models/progressModel.js";
import { UserAssessment, Question, Assessment } from "../models/userAssessmentModel.js";

// Submit an assessment attempt
export const submitAssessment = async (req, res) => {
  try {
    const { userId, assessmentId, answers, attemptNumber } = req.body;

    // Fetch correct answers
    const questions = await Question.find({ assessmentId });
    let score = 0;

    // Calculate score
    questions.forEach((q) => {
      const userAnswer = answers.find((a) => a.questionId.toString() === q._id.toString());
      if (userAnswer && userAnswer.selectedOption === q.correctOption) {
        score++;
      }
    });

    const assessment = await Assessment.findById(assessmentId);
    const isPassed = score >= assessment.passMark;

    // Save user assessment
    const result = new UserAssessment({
      userId,
      assessmentId,
      attemptNumber,
      answers,
      score,
      isPassed,
    });

    await result.save();

    res.status(200).json({ message: "Assessment submitted", result });
  } catch (error) {
    console.error("Error submitting assessment:", error);
    res.status(500).json({ error: "Server error" });
  }
};

//progress

export const updateWatchedVideo = async (req, res) => {
  const { courseId, videoId, sectionId } = req.body
  const userId = req.user.id;

  try {
    let progress = await Progress.findOne({ userId, courseId });

    if(!progress) {
      progress = new Progress({
        userId,
        courseId,
        watchedVideo : [videoId],
        lastWatched: { videoId, sectionId}
      });
    } else{
      if(!progress.watchedVideos.includes(videoId)){
        progress.watchedVideos.push(videoId);
      };
      progress.lastWatched = { videoId, sectionId };
    };
    await progress.save();
    res.status(200).json({ message : "Progress updated", progress});
  } catch (err) {
    res.status(500).json({ message: "Error updating progress", error: err.message })
  }
}

export const markSectionComplete = async (req, res) => {
  const { courseId, sectionId } = req.body;
  const userId = req.user.id;

  try {
    const course = await Course.findById(courseId);
    const section = course.sections.id(sectionId);
    const progress = await Progress.findOne({ userId, courseId});
    const assessment = await Assessment.findOne({ sectionId });
    const userAssessment = await UserAssessment.findOne({ userId, assessmentId: assessment._id, isPassed: true })

    // Check if all videos in section are watched
    const allWatched = section.videos.every(video =>
      progress.watchedVideos.map(id => id.toString()).includes(video._id.toString()));

      if (!allWatched) {
        return res.status(403).json({ message: "You must watch all videos in this section." });
      }

      if (!userAssessment) {
        return res.status(403).json({ message: "You must pass the assessment for this section." });
      }

      if (!progress.completedSections.includes(sectionId)) {
        progress.completedSections.push(sectionId);
      }

          // Check if all sections in the course are completed
    const allSectionsComplete = course.sections.every(section =>
      progress.completedSections.map(id => id.toString()).includes(section._id.toString())
    );

    if (allSectionsComplete && !progress.completedCourses.includes(courseId)) {
      progress.completedCourses.push(courseId);
    }

    await progress.save();

    res.status(200).json({ message: "Section marked complete", progress });

  } catch (error) {
    res.status(500).json({ message: "Failed to complete section", error: err.message });
  }
}

export const isSectionComplete = async (userId, courseId, sectionId) => {
  const progress = await Progress.findOne({ userId, courseId });
  return progress?.completedSections.includes(sectionId);
};

export const isCourseComplete = async (userId, courseId) => {
  const progress = await Progress.findOne({ userId, courseId });
  return progress?.completedCourses.includes(courseId);
};

export const canAccessNextSection = async (userId, courseId, currentSectionId) => {
  const sectionComplete = await isSectionComplete(userId, courseId, currentSectionId);
  if (!sectionComplete) return false;
  const course = await Course.findById(courseId);
  const idx = course.sections.findIndex(sec => sec._id.toString() === currentSectionId);
  return course.sections[idx + 1]?._id || null;
};

// get progress
export const getProgressForCourse = async (req, res) => {
  const userId = req.user.id;
  const { courseId } = req.params;

  try {
    const progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      return res.status(404).json({ message: "No progress found for this course." });
    }
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: "Error fetching progress", error: err.message });
  }
};