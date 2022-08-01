import { Request, Response } from "express";
import CreatePersonSevice from "../services/CreatePersonService";
import DeletePersonService from "../services/DeletePersonService";
import ListPersonHabilityService from "../services/ListPersonHabilitysService";
import ListPersonsService from "../services/ListPersonsService";
import ShowPersonService from "../services/ShowPersonService";
import UpdatePersonService from "../services/UpdatePersonService";

export default class PersonsController{
    public async create(req: Request, res: Response): Promise<Response>{

        const createPerson = new CreatePersonSevice()

        const data = req.body

        const person = await createPerson.execute(data)

        return res.status(202).json(person)
    }

    public async index(req: Request, res: Response): Promise<Response>{
        
        const listPerson = new ListPersonsService()

        const person = await listPerson.execute()

        return res.status(200).json(person)
    }

    public async update(req: Request, res: Response): Promise<Response>{

        const updatePerson = new UpdatePersonService()

        const { id } = req.params
        const { name, twitter_user, twitter_link, discord_name, anilist_mal, description, link, picture } = req.body

        const person = await updatePerson.execute({id, name, twitter_user, twitter_link, discord_name, anilist_mal, description, link, picture})

        return res.status(200).json(person)
    }

    public async show(req: Request, res: Response): Promise<Response>{

        const showPerson = new ShowPersonService()

        const { id } = req.params

        const person = await showPerson.execute(id)

        return res.status(200).json(person)
    }

    public async delete(req: Request, res: Response): Promise<Response>{

        const deletePerson = new DeletePersonService()

        const { id } = req.params

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const person = await deletePerson.execute(id)

        return res.status(201).json()
    }

    public async list(req: Request, res: Response): Promise<Response>{

        const listHabilityPerson = new ListPersonHabilityService

        const person = await listHabilityPerson.execute()

        return res.status(200).json(person)

    }
}