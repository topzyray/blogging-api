import mongoose, { Schema } from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    unique: [true, 'Blog title is unique'],
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  readCount: {
    type: Number,
    default: 0,
  },
  readingTime: {
    type: Number,
    default: 0,
  },
  body: {
    type: String,
    required: [true, 'Body is required'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
