//inportação de dependencia
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv'
import SwaggerUi from 'swagger-ui-express'
import AppError from '@shared/AppError/AppError';
import { errors } from 'celebrate'

//importando arquivo de rotas
import router from './routes/routes';

//iportando arquivo do swagger
import swaggerFile from '../../swaggerFile.json'

//instancia do express
const app = express()

//configuração do dotenv
dotenv.config()

//instancia do express usando coisas
app.use(express.json())
app.use(cors())

//express usando rotas
app.use('/api/v1', router)
app.use('/api/v1/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile))

//erro do celebrate
app.use(errors())


//midlleware de erro
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.status).json({
            status: 'Error',
            message: err.message,
            code: err.status
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: err.message
    })
})

//iniciando server
app.listen(process.env.NUMBER_PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log('------------------------------------')
    // eslint-disable-next-line no-console
    console.log(`Iniciando na porta ${process.env.NUMBER_PORT}`)
    // eslint-disable-next-line no-console
    console.log('------------------------------------')
})