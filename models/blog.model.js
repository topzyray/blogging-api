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
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  read_count: {
    type: Number,
    default: 0,
  },
  reading_time: {
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
