import express from "express";
import {getAllProblems, setProblem,getSingleProblem} from '../controllers/problems'

const router = express.Router();

router.route('/setProblem').post(setProblem);
router.route('/getAllProblems').get(getAllProblems);
router.route('/:problemSlug').get(getSingleProblem);

export default router;