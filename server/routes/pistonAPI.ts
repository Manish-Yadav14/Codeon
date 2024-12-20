import express from 'express';
import { executeCode } from '../controllers/pistonAPI';

const router = express.Router();

router.route('').post(executeCode);

export default router;