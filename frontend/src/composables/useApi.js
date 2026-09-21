import { ref } from 'vue'
import { api } from '../services/api'

export function useApi() {
    const apiStatus = ref('checking')
    const apiData = ref(null)
    const apiError = ref(null)

    const checkApi = async () => {
        apiStatus.value = 'checking'
        apiError.value = null

        try {
            const result = await api.get('/health')

            apiData.value = result
            apiStatus.value = 'online'

            return result
        } catch (error) {
            apiStatus.value = 'offline'
            apiError.value = error.message

            return null
        }
    }

    return {
        apiStatus,
        apiData,
        apiError,
        checkApi
    }
}