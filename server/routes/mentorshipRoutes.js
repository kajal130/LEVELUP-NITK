import express from 'express';
import { getSeniorsList, requestMentorshipSession } from '../controllers/mentorshipController.js';

const router = express.Router();

router.get('/seniors', getSeniorsList);
router.post('/request', requestMentorshipSession);

export default router;
