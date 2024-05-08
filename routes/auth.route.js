import express from 'express';
import passport from 'passport';
import {
  signin,
  signup,
  logout,
  update,
} from '../controllers/auth.controller.js';
import {
  AddUserValidationMW,
  UpdateUserValidationMW,
} from '../validators/user.validator.js';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  AddUserValidationMW,
  signup
);

authRouter.post('/signin', signin);
// authRouter.post('/update', UpdateUserValidationMW, update);
authRouter.post('/logout', logout);

export default authRouter;
