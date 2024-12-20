import { Request, Response } from "express";
import prisma from "../db";
import axios from "axios";
require("dotenv").config();

const api = "https://emkc.org/api/v2/piston/execute";

export const executeCode = async (req: Request,res: Response): Promise<void> => {
    try {
        const { language, version, code } = req.body;
        const result = await axios.post(api, {
          language,
          version,
          files: [
            {
              content: code,
            },
          ],
        });
        res.send(result?.data.run);
        console.log(result?.data.run)
        return;
        
    } catch (error) {
        res.send(error);
        return;
    }
};
