import {Request,Response} from 'express';
import prisma from '../db';
import bcrypt from 'bcryptjs'
import jwt, { decode } from 'jsonwebtoken'
require('dotenv').config();

const SECRET_KEY: string | undefined = process.env.SECRET_KEY;
if(!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

type User = {
    id:String,
    name:String,
    email:String,
    password:String,
    createdAt:String
}

const generateToken = (user:User)=>{
    return jwt.sign({email:user.email,name:user.name},SECRET_KEY,{expiresIn:"2h"});
}

export const login = async(req:Request,res:Response):Promise<void> =>{
    const {email,password} = req.body;
    try {
        //checking if user exists or not
        const user = await prisma.user.findFirst({where:{email:email}});

        if(!user) {
            res.status(404).send({error:'User not Found'});
            return;
        }

        // Matching password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).send({error:'Invalid Credentials'});
            return;
        }

        // Generating token for user
        const token = generateToken(user);
        console.log(token);

        res.send(token)
        return ;

    } catch (error) {
        res.send(error)
    }
}

export const signup = async(req:Request,res:Response):Promise<void> =>{
    const {name,email,password} = req.body;
    try {
        // Checking if user already exists
        const user = await prisma.user.findFirst({where:{email:email}});
        if(user){
            res.send({error:"User Already exists"});
            return;
        }

        // Hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        const newUser = await prisma.user.create({data:{name,email,password:hashedPassword}});

        if(newUser){
            const token = generateToken(newUser);
            res.send(token);
            return;
        }

    } catch (error) {
        res.send(error);
        return; 
    }
}

export const authenticate = (req:Request,res:Response)=>{
    const {token} = req.body;
    try {
        const decodedToken = jwt.verify(token,SECRET_KEY);
        console.log(decodedToken)
        res.send(decodedToken)
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}

