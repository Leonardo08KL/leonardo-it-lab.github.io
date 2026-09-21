import { ref, computed } from 'vue'
import { networkService } from '../services/networkService'

export function useNetwork() {
    const status = ref('online')

    const ip = ref('192.168.1.100')
    const gateway = ref('192.168.1.1')
    const dns = ref('8.8.8.8')

    const loading = ref(false)

    const lastAction = ref('')
    const lastResult = ref(null)

    const isOnline = computed(() => {
        return status.value === 'online'
    })

    const setResult = (action, result) => {
        lastAction.value = action
        lastResult.value = result
    }

    const ping = async (
        host = gateway.value
    ) => {
        loading.value = true
        lastAction.value = 'ping'

        try {
            const result =
                await networkService.ping(host)

            setResult('ping', result)

            return result
        } catch (error) {
            const result = {
                success: false,
                error: error.message
            }

            setResult('ping', result)

            return result
        } finally {
            loading.value = false
        }
    }

    const dnsLookup = async (
        hostname = 'google.com'
    ) => {
        loading.value = true
        lastAction.value = 'dns'

        try {
            const result =
                await networkService.dnsLookup(hostname)

            setResult('dns', result)

            return result
        } catch (error) {
            const result = {
                success: false,
                error: error.message
            }

            setResult('dns', result)

            return result
        } finally {
            loading.value = false
        }
    }

    const checkPorts = async (
        host = gateway.value,
        ports = [22, 80, 443]
    ) => {
        loading.value = true
        lastAction.value = 'ports'

        try {
            const result =
                await networkService.checkPorts(
                    host,
                    ports
                )

            setResult('ports', result)

            return result
        } catch (error) {
            const result = {
                success: false,
                error: error.message
            }

            setResult('ports', result)

            return result
        } finally {
            loading.value = false
        }
    }

    const scanNetwork = async (
        network = '192.168.1.0/24'
    ) => {
        loading.value = true
        lastAction.value = 'scan'

        try {
            const result =
                await networkService.scanNetwork(network)

            setResult('scan', result)

            return result
        } catch (error) {
            const result = {
                success: false,
                error: error.message
            }

            setResult('scan', result)

            return result
        } finally {
            loading.value = false
        }
    }

    const refreshStatus = async () => {
        loading.value = true

        try {
            const result =
                await networkService.getStatus()

            status.value = result.status

            return result
        } catch (error) {
            status.value = 'offline'

            return {
                success: false,
                error: error.message
            }
        } finally {
            loading.value = false
        }
    }

    const resetResult = () => {
        lastAction.value = ''
        lastResult.value = null
    }

    return {
        status,
        ip,
        gateway,
        dns,

        loading,
        lastAction,
        lastResult,

        isOnline,

        ping,
        dnsLookup,
        checkPorts,
        scanNetwork,
        refreshStatus,
        resetResult
    }
}