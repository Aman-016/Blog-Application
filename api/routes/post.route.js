import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, getPosts } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createPost);

// later you can uncomment these
 router.get('/getposts', getPosts);
// router.delete('/delete/:postId', verifyToken, deletePost);
// router.put('/update/:postId', verifyToken, updatePost);

export default router;
