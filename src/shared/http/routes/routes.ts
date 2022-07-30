//importando dependencias 
import { Router } from 'express'

//instanciando função de rotas do express
const router = Router()

//importação dos arquivos de rotas
import habilityRouter from '@modules/hability/routes/hability.routes'

router.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!',
    })
})

router.use('/hability', habilityRouter)

export default router