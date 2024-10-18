import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Use authentication routes without token protection
router.use('/auth', authRoutes);

// Protect all API routes with authentication middleware
router.use('/api', authenticateToken, apiRoutes);

export default router;
