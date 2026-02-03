import express from 'express';
import {
  deleteUser,
  getUsers,
  signout,
  test,
  updateUser,
  getUser, // 👈 ADD THIS
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.get('/:userId', verifyToken, getUser); // ✅ ADD THIS
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);

export default router;
