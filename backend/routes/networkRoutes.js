import { Router } from 'express'

import {
    ping,
    dns,
    ports,
    scan,
    status
} from '../controllers/networkController.js'

const router = Router()

router.post(
    '/ping',
    ping
)

router.post(
    '/dns',
    dns
)

router.post(
    '/ports',
    ports
)

router.post(
    '/scan',
    scan
)

router.get(
    '/status',
    status
)

export default router