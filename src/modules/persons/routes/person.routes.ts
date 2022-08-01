import { Router } from 'express'
import PersonsController from '../controller/PersonController'
import { celebrate, Joi, Segments } from 'celebrate'
import isAuthenticated from '@shared/http/middlewares/isAuthenticated'

const personRouter = Router()
const personController = new PersonsController()

personRouter.post(
    '/',
    celebrate({
        [Segments.BODY]:{
            name: Joi.string().required(),
            twitter_user: Joi.string().required(),
            twitter_link: Joi.string().required(),
            discord_name: Joi.string().required(),
            anilist_mal: Joi.string(),
            description: Joi.string().required(),
            link: Joi.string()
        }
    }),
    isAuthenticated,
    personController.create
)

personRouter.get('/', personController.index)

personRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]:{
            name: Joi.string(),
            twitter_user: Joi.string(),
            twitter_link: Joi.string(),
            discord_name: Joi.string(),
            anilist_mal: Joi.string(),
            description: Joi.string(),
            link: Joi.string(),
            picture: Joi.string()
        }
    }),
    isAuthenticated,
    personController.update
)

personRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    personController.show
)

personRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    isAuthenticated,
    personController.delete
)

personRouter.post('/listar', personController.list)



export default personRouter