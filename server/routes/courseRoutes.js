import express from 'express';
import { getAllCourses, getCourseById, completeTopicQuiz } from '../controllers/courseController.js';

const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/quiz-submit', completeTopicQuiz);

export default router;
