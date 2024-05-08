import express from 'express';
import {
  deleteBlogById,
  addNewBlog,
  getAllBlog,
  getPublishedBlog,
  getPublishedBlogById,
  updateBlogById,
} from '../controllers/blog.controller.js';
import {
  AddBlogValidationMW,
  UpdateBlogValidationMW,
} from '../validators/blog.validator.js';

const blogRoute = express.Router();
blogRoute.get('/', getAllBlog);
blogRoute.get('/published', getPublishedBlog);
blogRoute.get('/published/:id', getPublishedBlogById);
blogRoute.post('/', AddBlogValidationMW, addNewBlog);
blogRoute.put('/:id', UpdateBlogValidationMW, updateBlogById);
blogRoute.delete('/:id', deleteBlogById);

export default blogRoute;
