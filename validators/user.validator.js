import Joi from 'joi';

const UserAddSchema = Joi.object({
  first_name: Joi.string().min(3).trim().required(),
  last_name: Joi.string().min(3).trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
});

const UserUpdateSchema = Joi.object({
  first_name: Joi.string().min(3).trim(),
  last_name: Joi.string().min(3).trim(),
  email: Joi.string().email(),
  password: Joi.string().pattern(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  ),
});

export const AddUserValidationMW = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await UserAddSchema.validateAsync(userPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 400,
    });
  }
};

export const UpdateUserValidationMW = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await UserUpdateSchema.validateAsync(userPayload);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 400,
    });
  }
};
