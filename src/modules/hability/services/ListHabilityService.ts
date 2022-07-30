import prisma from "@database/prismaClient";
import { Hability } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

export default class ListHabilityService{
    public async execute(): Promise<Hability[]>{
        const hability = await prisma.hability.findMany()

        if(!hability.length){
            throw new AppError("Nothing habilitys found.", 404)
        }

        return hability
    }
}