// server/routes/qualification.routes.js
import express from 'express';
import {
  createQualification,
  getAllQualifications,
  getQualificationById,
  updateQualification,
  deleteQualification
} from '../controllers/qualification.controller.js';

const router = express.Router();

// Qualification routes
router.post('/', createQualification);           // Create a new qualification
router.get('/', getAllQualifications);           // Get all qualifications
router.get('/:id', getQualificationById);        // Get qualification by ID
router.put('/:id', updateQualification);         // Update qualification by ID
router.delete('/:id', deleteQualification);      // Delete qualification by ID

export default router;
