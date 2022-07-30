import prisma from "@database/prismaClient";
import { Hability } from '@prisma/client'

interface IRequest{
    name: string;
    description: string;
}

export default class CreateHabilityService{
    public async execute({name, description}: IRequest): Promise<Hability>{

        const hability = prisma.hability.create({
            data:{
                name,
                description
            }
        })

        return hability;

    }
}