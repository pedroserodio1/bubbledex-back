import { Router } from "express";
import HabilityPersonController from "../controller/HabilityPersonController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";

const HabilityPersonRoute = Router()
const habilityPersonController = new HabilityPersonController()

HabilityPersonRoute.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            personsId: Joi.string().required().uuid(),
            habilityId: Joi.string().required().uuid()
        }
    }),
    isAuthenticated,
    habilityPersonController.create
)

HabilityPersonRoute.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]:{
            id: Joi.string().required().uuid(),
        }
    }),
    isAuthenticated,
    habilityPersonController.delete
)

export default HabilityPersonRoute