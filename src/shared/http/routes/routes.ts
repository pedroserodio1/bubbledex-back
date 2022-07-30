//importando dependencias 
import { Router } from 'express'

//instanciando função de rotas do express
const router = Router()

router.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!',
    })
})

export default router