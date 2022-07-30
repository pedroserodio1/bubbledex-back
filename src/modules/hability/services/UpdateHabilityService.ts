import prisma from '@database/prismaClient';
import { Hability } from '@prisma/client'
import AppError from '@shared/AppError/AppError';

interface IRequest{
    id: string;
    name: string;
    description: string;
}

export default class UpdateHabilityService{
    public async execute({id, name, description}: IRequest): Promise<Hability>{
        const habilityExists = await prisma.hability.findUnique({
            where: {
                id
            }
        })

        if(!habilityExists){
            throw new AppError('Hability not exists', 404);
        }

        const hability = await prisma.hability.update({
            where: {
                id
            },
            data: {
                name, 
                description
            }
        })

        return hability

    }
}