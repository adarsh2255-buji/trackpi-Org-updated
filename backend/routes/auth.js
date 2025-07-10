import express from 'express';
import passport from '../config/passport.js';
import { savePhoneNumber } from '../controller/User.js';
import { authenticateJWT } from '../middleware/authenticateJWT.js';

const router = express.Router();

// Start Google OAuth login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const { token } = req.user;
    // On success, redirect to frontend /start-course
    res.redirect(`http://localhost:5173/phone-number?token=${token}`);
  }
);

router.post('/phone-number', authenticateJWT, savePhoneNumber)

export default router; 