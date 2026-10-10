import express from 'express';
import { getAllProblems, getProblemBySlug, submitProblemCode } from '../controllers/problemController.js';

const router = express.Router();

router.get('/', getAllProblems);
router.get('/:slug', getProblemBySlug);
router.post('/submit', submitProblemCode);

export default router;
