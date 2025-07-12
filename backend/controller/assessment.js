import e from "express";
import { Assessment, Question } from "../models/userAssessmentModel.js"
export const createAssessmentWithQuestions = async (req, res) => {
    try {
        const { sectionId, timeLimit, passMark, maxAttempts, questions } = req.body;

        //create the assessment first (without questions)
        const newAssessment = new Assessment({ 
            sectionId, 
            timeLimit, 
            passMark, 
            maxAttempts,
            questions: [] //placeholder for questions objectIds
         });
         await newAssessment.save();

         //create questions and link them to the assessment
         const createdQuestions = await Promise.all(
            questions.map(async (q) => {
                const newQuestion = new Question({
                    assessmentId: newAssessment._id,
                    questionText: q.questionText,
                    options: q.options,
                    correctOption: q.correctOption
                })
                await newQuestion.save();
                return newQuestion._id;
            })
         );

         //update assessment with the linked questions
         newAssessment.questions = createdQuestions;
         await newAssessment.save();

         res.status(201).json({
            message: 'Assessment with questions created successfully',
            assessment: newAssessment
         });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create assessment', error });
        console.log(error);
    }
}

//update assessment with question
export const updateAssessmentWithQuestions = async (req, res) => {
    try {
      const { assessmentId } = req.params;
      const { timeLimit, passMark, maxAttempts, questions } = req.body;
  
      const assessment = await Assessment.findById(assessmentId);
      if (!assessment) return res.status(404).json({ message: 'Assessment not found' });
  
      // Update assessment details
      if (timeLimit !== undefined) assessment.timeLimit = timeLimit;
      if (passMark !== undefined) assessment.passMark = passMark;
      if (maxAttempts !== undefined) assessment.maxAttempts = maxAttempts;
  
      await assessment.save();
  
      // Update or create questions
      if (Array.isArray(questions)) {
        for (const q of questions) {
          if (q._id) {
            // Update existing question
            await Question.findByIdAndUpdate(q._id, {
              questionText: q.questionText,
              options: q.options,
              correctOption: q.correctOption
            });
          } else {
            // Create new question
            const newQuestion = new Question({
              assessmentId,
              questionText: q.questionText,
              options: q.options,
              correctOption: q.correctOption
            });
            await newQuestion.save();
            assessment.questions.push(newQuestion._id);
          }
        }
  
        await assessment.save();
      }
  
      res.status(200).json({ message: 'Assessment updated successfully', assessment });
    } catch (error) {
      console.error('[UPDATE ASSESSMENT ERROR]', error);
      res.status(500).json({ message: 'Failed to update assessment', error: error.message });
    }
  };

  //delete assessment with questions
  export const deleteAssessment = async (req, res) => {
    try {
      const { assessmentId } = req.params;
  
      const assessment = await Assessment.findById(assessmentId);
      if (!assessment) return res.status(404).json({ message: 'Assessment not found' });
  
      // Delete all related questions
      await Question.deleteMany({ assessmentId: assessment._id });
  
      // Delete the assessment itself
      await assessment.deleteOne();
  
      res.status(200).json({ message: 'Assessment and its questions deleted successfully' });
    } catch (error) {
      console.error('[DELETE ASSESSMENT ERROR]', error);
      res.status(500).json({ message: 'Failed to delete assessment', error: error.message });
    }
  };
  