import { Request, Response } from "express";
import prisma from "../db";
require("dotenv").config();

export const setProblem = async (req: Request, res: Response): Promise<void> => {
  const { title,slug ,statement, difficulty, topics, testcases } = req.body;

  try {
    // Validate request body (optional but recommended)
    if (!title || !statement || !difficulty || !topics || !testcases) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const challenge = await prisma.problems.create({
      data: {
        title,
        slug,
        statement,
        difficulty,
        topics,
        testcases: {
          create: testcases.map((tc: any) => ({
            input: tc.input,
            output: tc.output,
          })),
        },
      },
    });

    // Response
    res.status(201).json({
      message: "Challenge created successfully",
      challengeId: challenge.problemId,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const getAllProblems = async (req:Request,res:Response):Promise<void> =>{
  try {
    const challenges = await prisma.problems.findMany({
      include:{
        testcases:true,
      }
    });
    res.send(challenges);
    return;
  } catch (error) {
    res.send(error);
    return;
  }
}

export const getSingleProblem = async (req:Request,res:Response): Promise<void> =>{
  const {problemSlug} = req.params;
  try {
    const problem = await prisma.problems.findUnique({where:{slug:problemSlug},include:{testcases:true}})
    if(problem){
      res.send(problem);
      return;
    }else{
      res.status(404).json({ message: 'Problem not found' });
    }
  } catch (error) {
    res.send(error);
    return; 
  }
}