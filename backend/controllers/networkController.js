import {
    pingHost,
    lookupDns,
    checkPorts,
    scanNetwork,
    getNetworkStatus
} from '../services/networkService.js'

export const ping = async (req, res) => {
    try {
        const {
            host = '192.168.1.1'
        } = req.body

        const result =
            await pingHost(host)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const dns = async (req, res) => {
    try {
        const {
            hostname = 'google.com'
        } = req.body

        const result =
            await lookupDns(hostname)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const ports = async (req, res) => {
    try {
        const {
            host = '192.168.1.1',
            ports: requestedPorts
        } = req.body

        const result =
            await checkPorts(
                host,
                requestedPorts
            )

        res.json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const scan = async (req, res) => {
    try {
        const {
            network = '192.168.1.0/24'
        } = req.body

        const result =
            await scanNetwork(network)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const status = async (req, res) => {
    try {
        const result =
            await getNetworkStatus()

        res.json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}