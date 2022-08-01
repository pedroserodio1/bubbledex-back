import prisma from "@database/prismaClient";
import { Persons} from "@prisma/client";
import AppError from "@shared/AppError/AppError";

export default class ShowPersonService{
    public async execute(id: string): Promise<Persons>{

        const person = await prisma.persons.findUnique({
            where: {
                id
            }
        })

        if(!person){
            throw new AppError("Person not found", 404)
        }

        return person

    }
}