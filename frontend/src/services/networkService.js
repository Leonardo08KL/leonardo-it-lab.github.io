import { api } from './api'

export const networkService = {
    ping(host) {
        return api.post('/network/ping', {
            host
        })
    },

    dnsLookup(hostname) {
        return api.post('/network/dns', {
            hostname
        })
    },

    checkPorts(host, ports = []) {
        return api.post('/network/ports', {
            host,
            ports
        })
    },

    scanNetwork(network) {
        return api.post('/network/scan', {
            network
        })
    },

    getStatus() {
        return api.get('/network/status')
    }
}