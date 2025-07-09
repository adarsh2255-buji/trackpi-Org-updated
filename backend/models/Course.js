const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: Number,
  videos: [videoSchema],
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' },
  createdAt: { type: Date, default: Date.now },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: String,
  sections: [sectionSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courseSchema);
