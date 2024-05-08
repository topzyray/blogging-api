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

const blogRouter = express.Router();
blogRouter.get('/', getAllBlog);
blogRouter.get('/published', getPublishedBlog);
blogRouter.get('/published/:id', getPublishedBlogById);
blogRouter.post('/', AddBlogValidationMW, addNewBlog);
blogRouter.put('/:id', UpdateBlogValidationMW, updateBlogById);
blogRouter.delete('/:id', deleteBlogById);

export default blogRouter;
