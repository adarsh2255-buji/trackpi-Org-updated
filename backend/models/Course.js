import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  title: { type: String, required: true },
  desc: String,
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const sectionSchema = new Schema({
  title: { type: String, required: true },
  duration: Number,
  videos: [videoSchema],
  assessmentId: { type: Schema.Types.ObjectId, ref: 'Assessment' },
  createdAt: { type: Date, default: Date.now },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  thumbnail: String,
  sections: [sectionSchema],
  createdAt: { type: Date, default: Date.now },
});

export default model('Course', courseSchema);
