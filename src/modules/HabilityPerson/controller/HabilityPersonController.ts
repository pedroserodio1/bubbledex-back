import { Request, Response } from "express";
import CreateHabilityPersonService from "../services/CreateHabilityPersonService";
import DeleteHabilityPersonService from "../services/DeleteHabilityPerson";

export default class HabilityPersonController {
    public async create(req: Request, res: Response): Promise<Response> {

        const crateHabilityPerson = new CreateHabilityPersonService()

        const { habilityId, personsId } = req.body

        const habilityPerson = await crateHabilityPerson.execute({personsId, habilityId})

        return res.status(201).json(habilityPerson)
    }

    public async delete(req: Request, res: Response): Promise<Response> {

        const deleteHabilityPerson = new DeleteHabilityPersonService()

        const {id} = req.params

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const habilityPerson = await deleteHabilityPerson.execute(id)

        return res.status(200).json()
    }
} 