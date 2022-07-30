import AppError from "@shared/AppError/AppError";
import { NextFunction, Request, Response } from 'express';

export default function (req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new AppError("Token is missing", 401)
    }

    const [, token] = authHeader.split(' ')

    if(token === process.env.AUTHORIZATION_CODE){
        return next()
    }

    throw new AppError("Invalid authorization code", 401)

}