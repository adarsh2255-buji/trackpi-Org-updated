import mongoose from "mongoose";

const { Schema, model } = mongoose;

// ---------------------
// Assessment Schema
// ---------------------
const assessmentSchema = new Schema(
  {
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    timeLimit: {
      type: Number, // in minutes
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
    },
    maxAttempts: {
      type: Number,
      required: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true }
);

// ---------------------
// Question Schema
// ---------------------
const questionSchema = new Schema(
  {
    assessmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    options: [
      {
        type: String,
        required: true,
      },
    ],
    correctOption: {
      type: String, // or Number (index of options)
      required: true,
    },
  },
  { timestamps: true }
);

// ---------------------
// UserAssessment Schema
// ---------------------
const userAssessmentSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assessmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },
    attemptNumber: {
      type: Number,
      required: true,
    },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOption: {
          type: String,
          required: true,
        },
      },
    ],
    score: {
      type: Number,
      required: true,
    },
    isPassed: {
      type: Boolean,
      required: true,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Export Models
export const Assessment = mongoose.models.Assessment || model("Assessment", assessmentSchema);
export const Question = mongoose.models.Question || model("Question", questionSchema);
export const UserAssessment = mongoose.models.UserAssessment || model("UserAssessment", userAssessmentSchema);
