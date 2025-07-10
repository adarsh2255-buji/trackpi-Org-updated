// models/progressModel.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  watchedVideos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
  completedSections: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Section',
    },
  ],
  completedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  lastWatched: {
    videoId: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
    sectionId: {
      type: Schema.Types.ObjectId,
      ref: 'Section',
    },
  },
}, { timestamps: true });

// Ensure one progress per user-course pair
progressSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
