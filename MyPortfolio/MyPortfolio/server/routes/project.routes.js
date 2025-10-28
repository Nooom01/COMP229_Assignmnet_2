// server/routes/project.routes.js
import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} from '../controllers/project.controller.js';

const router = express.Router();

// Project routes
router.post('/', createProject);           // Create a new project
router.get('/', getAllProjects);           // Get all projects
router.get('/:id', getProjectById);        // Get project by ID
router.put('/:id', updateProject);         // Update project by ID
router.delete('/:id', deleteProject);      // Delete project by ID

export default router;
