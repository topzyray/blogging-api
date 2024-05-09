import express from "express";
import passport from "passport";
import { signIn, signUp } from "../controllers/auth.controller.js";
import {
  ValidateUserSignupMW,
  ValidateUserSigninMW,
} from "../validators/user.validator.js";

const authRouter = express.Router();

authRouter.post("/signup", ValidateUserSignupMW, signUp);
authRouter.post("/signin", ValidateUserSigninMW, signIn);

export default authRouter;
