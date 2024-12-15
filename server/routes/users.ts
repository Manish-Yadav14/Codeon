import express from 'express';
import {authenticate, login,signup} from '../controllers/users';

const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/authenticate').post(authenticate);

export default router;
