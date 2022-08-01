import prisma from "@database/prismaClient";
import AppError from "@shared/AppError/AppError";

export default class DeleteHabilityPersonService{
    public async execute(id: string): Promise<void>{

        const habilityPersonExists = await prisma.hability_person.findUnique({
            where: {
                id
            }
        })

        if(!habilityPersonExists){
            throw new AppError(`Hability person dont exist`, 404);  
        }

        await prisma.hability_person.delete({
            where:{
                id
            }
        })
    }
}