// models/progressModel.js

import mongoose, { model } from 'mongoose';
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
  watchedVideos: {
    type: Map,
    of: [{
      type: Schema.Types.ObjectId,
      ref: 'Video',
    }],
    default: {},
  },
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

export default model('Progress', progressSchema);
