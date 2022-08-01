import prisma from "@database/prismaClient";
import { Persons } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

interface IRequest {
    id: string;
    name: string
    twitter_user: string
    twitter_link: string
    discord_name: string
    anilist_mal?: string
    description: string
    picture: string
    link?: string
}

export default class UpdatePersonService{
    public async execute({id, name, twitter_user, twitter_link, discord_name, anilist_mal, description, link, picture}: IRequest): Promise<Persons> {

        const personExists = await prisma.persons.findUnique({
            where:{
                id
            }
        })

        if(!personExists) {
            throw new AppError("Person don't exists", 404)
        }

        const person = await prisma.persons.update({
            where:{
                id
            },
            data: {
                name,
                twitter_user,
                twitter_link,
                anilist_mal,
                discord_name,
                description,
                link,
                picture
            }
        })

        return person

    }
}