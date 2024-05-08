import express from 'express';
import {
  deleteUserById,
  addNewUser,
  getAllUser,
  getUserById,
  updateUserById,
} from '../controllers/user.controller.js';
import {
  AddUserValidationMW,
  UpdateUserValidationMW,
} from '../validators/user.validator.js';

const userRoute = express.Router();
userRoute.get('/', getAllUser);
userRoute.get('/:id', getUserById);
userRoute.post('/', AddUserValidationMW, addNewUser);
userRoute.put('/:id', UpdateUserValidationMW, updateUserById);
userRoute.delete('/:id', deleteUserById);

export default userRoute;
