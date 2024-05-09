import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import {
  deleteBlogById,
  addNewBlog,
  getAllBlog,
  updateBlogById,
  getBlogById,
} from "../controllers/blog.controller.js";
import {
  ValidateBlogUpdateMW,
  ValidateNewBlogMW,
} from "../validators/blog.validator.js";

const blogRouter = express.Router();
blogRouter.get("/", getAllBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.post("/", authenticate, ValidateNewBlogMW, addNewBlog);
blogRouter.put("/:id", authenticate, ValidateBlogUpdateMW, updateBlogById);
blogRouter.delete("/:id", authenticate, deleteBlogById);

export default blogRouter;
