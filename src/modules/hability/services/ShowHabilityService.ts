import prisma from "@database/prismaClient";
import { Hability } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

export default class ShowHabilityService{
    public async execute(id: string): Promise<Hability>{

        const hability = await prisma.hability.findUnique({
            where: {
                id
            }
        })

        if(!hability){
            throw new AppError("Hability not found", 404)
        }

        return hability

    }
}