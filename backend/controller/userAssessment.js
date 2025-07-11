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
