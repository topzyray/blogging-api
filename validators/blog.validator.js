import Joi from "joi";

const BlogAddSchema = Joi.object({
  title: Joi.string().min(3).trim().required(),
  description: Joi.string().min(5).max(500).optional().trim(),
  author: Joi.string().hex().length(24).required().messages({
    "any.required": "Author ID is required",
    "string.objectId": "Author ID must be a valid ObjectId",
  }),
  // author: Joi.object({ id: Joi.string().hex().length(24) }).required(),
  state: Joi.string().trim(),
  readCount: Joi.number().integer(),
  readingTime: Joi.number().integer(),
  tags: Joi.array().items(Joi.string()),
  body: Joi.string().min(5).trim().required(),
  timestamp: Joi.date().default(Date.now),
});

const BlogUpdateSchema = Joi.object({
  title: Joi.string().min(3).trim(),
  description: Joi.string().min(5).max(500).optional().trim(),
  // author: Joi.object({ id: Joi.string().hex().length(24) }),
  state: Joi.string().trim(),
  readCount: Joi.number().integer(),
  readingTime: Joi.number().integer(),
  tags: Joi.array().items(Joi.string()),
  body: Joi.string().min(5).trim(),
  timestamp: Joi.date().default(Date.now),
});

export const ValidateNewBlogMW = async (req, res, next) => {
  const blogPayload = req.body;
  try {
    await BlogAddSchema.validateAsync(blogPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 400,
    });
  }
};

export const ValidateBlogUpdateMW = async (req, res, next) => {
  const blogPayload = req.body;
  try {
    await BlogUpdateSchema.validateAsync(blogPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 400,
    });
  }
};
