import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import config from '../config/config.js';

export const signup = async (req, res) => {
  res.json({
    message: 'Signup successful',
    user: req.user,
  });
};

export const signin = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) {
        return next(err);
      }
      if (!user) {
        const error = new Error('Username or password is incorrect');
        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        //ADD EXPIRATION TIME, ONCE EXCEEDED, REFRESH TOKEN IS REQUIRED, AND USER IS LOGGED OUT
        // OR THE USER NEEDS TO LOGIN AGAIN
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

export const update = (req, res) => {
  res.send('Update user route');
};

export const logout = (req, res) => {
  res.send('Logout user route');
};
