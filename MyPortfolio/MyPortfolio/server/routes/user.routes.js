// server/routes/user.routes.js
import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js';
import { requireSignin, hasAuthorization } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/', createUser);              // Create a new user (public registration)
router.get('/', getAllUsers);              // Get all users (you can protect this with requireSignin if needed)

// Protected routes - require authentication
router.get('/:id', requireSignin, getUserById);                    // Get user by ID
router.put('/:id', requireSignin, updateUser);                     // Update user by ID
router.delete('/:id', requireSignin, deleteUser);                  // Delete user by ID

export default router;
