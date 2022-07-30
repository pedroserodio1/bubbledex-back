import { Request, Response } from "express";
import CreateHabilityService from "../services/CreateHabilityService";
import DeleteHabilityService from "../services/DeleteHabilityService";
import ListHabilityService from "../services/ListHabilityService";
import ShowHabilityService from "../services/ShowHabilityService";
import UpdateHabilityService from "../services/UpdateHabilityService";

export default class HabilityController{
    public async create(req: Request, res: Response): Promise<Response>{

        const createHability = new CreateHabilityService()

        const { name, description } = req.body;

        const hability = await createHability.execute({name, description})

        return res.status(200).json(hability)

    }

    public async index(req: Request, res: Response): Promise<Response>{

        const listHability = new ListHabilityService()

        const hability = await listHability.execute()

        return res.status(200).json(hability)

    }

    public async update(req: Request, res: Response): Promise<Response>{

        const updateHability = new UpdateHabilityService()

        const { id } = req.params
        const { name, description } = req.body

        const hability = await updateHability.execute({id, name, description})

        return res.status(200).json(hability)

    }

    public async delete(req: Request, res: Response): Promise<Response>{

        const deleteHabilty = new DeleteHabilityService()

        const { id } = req.params

        const hability = await deleteHabilty.execute(id)

        return res.status(204).json(hability)
    }

    public async show(req: Request, res: Response): Promise<Response>{
        
        const showHability = new ShowHabilityService()

        const { id } = req.params
        
        const hability = await showHability.execute(id)

        return res.status(200).json(hability)
    }
}