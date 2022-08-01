import prisma from "@database/prismaClient";
import { Persons } from "@prisma/client";

interface IRequest {
    name: string
    twitter_user: string
    twitter_link: string
    discord_name: string
    anilist_mal?: string
    description: string
    link?: string
}

export default class CreatePersonSevice{
    public async execute(data: IRequest): Promise<Persons>{
        
        const person = await prisma.persons.create({
            data: data
        })

        return person
    }

}