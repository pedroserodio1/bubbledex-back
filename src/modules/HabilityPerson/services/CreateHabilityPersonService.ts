import prisma from "@database/prismaClient";
import { Hability_person } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

interface IRequest {
    personsId: string;
    habilityId: string;
}

export default class CreateHabilityPersonService{
    public async execute({personsId, habilityId}: IRequest): Promise<Hability_person>{

        const personExists = await prisma.persons.findUnique({
            where: { 
                id: personsId 
            }
        })

        if(!personExists){
            throw new AppError("Person don't exist", 404)
        }

        const habilitExists = await prisma.hability.findUnique({
            where: {
                id: habilityId
            }
        })

        if(!habilitExists){
            throw new AppError("Hability don't exist", 404)
        }

        const Hability_person = await prisma.hability_person.create({
            data: {
                habilityId: habilityId,
                personsId: personsId
            }
        })

        return Hability_person

    }
}