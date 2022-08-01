import prisma from "@database/prismaClient";
import AppError from "@shared/AppError/AppError";

export default class DeletePersonService{
    public async execute(id: string): Promise<void> {

        const personExist = await prisma.persons.findUnique({
            where: {id}
        })

        if(!personExist){
            throw new AppError("Person not found", 404)
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const person = await prisma.persons.delete({
            where: {
                id
            }
        })


    }
}