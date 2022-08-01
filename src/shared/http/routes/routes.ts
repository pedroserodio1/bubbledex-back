//importando dependencias 
import { Router } from 'express'

//instanciando função de rotas do express
const router = Router()

//importação dos arquivos de rotas
import habilityRouter from '@modules/hability/routes/hability.routes'
import personRouter from '@modules/persons/routes/person.routes'
import HabilityPersonRoute from '@modules/HabilityPerson/routes/habilityperson.routes'

router.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!',
    })
})

router.use('/hability', habilityRouter)
router.use('/person', personRouter)
router.use('/habilityPerson', HabilityPersonRoute)

export default router