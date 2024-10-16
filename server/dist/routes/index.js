import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();
// Public auth routes
router.use('/auth', authRoutes);
// Add authentication to the API routes
router.use('/api', authenticateToken, apiRoutes); // Now all /api routes will require authentication
export default router;
// TODO: Add authentication to the API routes
