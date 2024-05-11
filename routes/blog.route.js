import express from "express";
import passport from "../middlewares/passportAuth.js";
import {
  deleteBlogById,
  addNewBlog,
  getAllBlog,
  updateBlogById,
  getBlogById,
  getAllByState,
} from "../controllers/blog.controller.js";
import {
  ValidateBlogUpdateMW,
  ValidateNewBlogMW,
} from "../validators/blog.validator.js";

const blogRouter = express.Router();

blogRouter.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  getAllByState
);
blogRouter.get("/", getAllBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ValidateNewBlogMW,
  addNewBlog
);
blogRouter.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  ValidateBlogUpdateMW,
  updateBlogById
);
blogRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteBlogById
);

export default blogRouter;
