// server/routes/contact.routes.js
import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
} from '../controllers/contact.controller.js';

const router = express.Router();

// Contact routes
router.post('/', createContact);           // Create a new contact
router.get('/', getAllContacts);           // Get all contacts
router.get('/:id', getContactById);        // Get contact by ID
router.put('/:id', updateContact);         // Update contact by ID
router.delete('/:id', deleteContact);      // Delete contact by ID

export default router;
