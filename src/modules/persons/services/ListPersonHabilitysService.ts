import prisma from "@database/prismaClient";
import { Persons, Hability } from "@prisma/client";
import AppError from "@shared/AppError/AppError";

interface IResponse{
    id:string,
    name:string,
    twitter_user:string,
    twitter_link: string,
    discord_name: string,
    anilist_mal: string | null,
    picture: string | null,
    description: string,
    link: string | null,
    created_at: Date,
    updated_at: Date,
    Hability_person: {
        id: string,
        personsId: string,
        habilityId: string,
        Hability: Hability
    }
}

export default class ListPersonHabilityService{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async execute(): Promise<any>{

       
            const persons = await prisma.persons.findMany({
                include: {
                    Hability_person: {
                        include: {
                            Hability: true
                        }
                    }
                }
            })
    
            return persons

        

    }
} 