import express from 'express';
import { getAllUsers, getUserById } from '../controllers/ProfiliController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/login', getUserById);

// Potresti definire altre rotte come POST per createUser, PUT per updateUser, ecc.

export default router;
