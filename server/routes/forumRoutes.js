import express from 'express';
import { getForumPosts, createForumPost, likeForumPost } from '../controllers/forumController.js';

const router = express.Router();

router.get('/', getForumPosts);
router.post('/', createForumPost);
router.put('/:id/like', likeForumPost);

export default router;
