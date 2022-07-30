import prisma from "@database/prismaClient";
import AppError from "@shared/AppError/AppError";

export default class DeleteHabilityService{
    public async execute(id: string): Promise<void>{

        const habilityExists = await prisma.hability.findUnique({
            where: {
                id
            }
        })

        if(!habilityExists){
            throw new AppError("Hability not found", 404)
        }

        await prisma.hability.delete({
            where: {
                id
            }
        })
        
    }
}