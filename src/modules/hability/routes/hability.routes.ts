import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import HabilityController from '../controller/HabilityController'
import isAuthenticated from '@shared/http/middlewares/isAuthenticated'

const habilityRouter = Router()
const habilityController = new HabilityController()

habilityRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string().required()
        }
    }), 
    isAuthenticated,
    habilityController.create
)

habilityRouter.get('/', habilityController.index)

habilityRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        },
        [Segments.BODY]: {
            name: Joi.string(),
            description: Joi.string()
        }
    }),
    isAuthenticated,
    habilityController.update
)

habilityRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    isAuthenticated,
    habilityController.delete
)

habilityRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    habilityController.show
)

export default habilityRouter