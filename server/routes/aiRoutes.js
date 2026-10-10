import express from 'express';
import { getAIRoadmap, getResumeATSAnalysis, getAIQuiz, handleAIChat } from '../controllers/aiController.js';

const router = express.Router();

router.post('/roadmap', getAIRoadmap);
router.post('/resume-ats', getResumeATSAnalysis);
router.post('/generate-quiz', getAIQuiz);
router.post('/chat', handleAIChat);

export default router;
