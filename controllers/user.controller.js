import User from '../models/user.model.js';

export const getAllUser = (req, res) => {
  res.send('Getting all users');
};

export const getUserById = (req, res) => {
  res.send('Getting user by Id');
};

export const addNewUser = (req, res) => {
  res.send('Adding new user');
};

export const updateUserById = (req, res) => {
  res.send('Updating user by Id');
};

export const deleteUserById = (req, res) => {
  res.send('Deleting user by Id');
};
