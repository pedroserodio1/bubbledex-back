import prisma from "@database/prismaClient";
import { Persons } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

export default class ListPersonsService{
    public async execute(): Promise<Persons[]>{

        const persons = await prisma.persons.findMany()

        if(!persons){
            throw new AppError("Not persons found", 404)
        }

        return persons

    }
}