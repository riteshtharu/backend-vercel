import express from 'express';
import {verifyEmail, register, login, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword); 
router.post('/verify-email', verifyEmail);

export default router;