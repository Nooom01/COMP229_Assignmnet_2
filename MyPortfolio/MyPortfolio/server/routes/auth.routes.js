// server/routes/auth.routes.js
import express from 'express';
import {
  signup,
  signin,
  signout,
  verifyToken
} from '../controllers/auth.controller.js';
import { requireSignin } from '../middleware/auth.middleware.js';

const router = express.Router();

// Authentication routes
router.post('/signup', signup);              // Register a new user
router.post('/signin', signin);              // Login user
router.get('/signout', signout);             // Logout user
router.get('/verify', requireSignin, verifyToken);  // Verify JWT token (protected route)

export default router;
