import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useClock(options = {}) {
    const {
        hour12 = false,
        showSeconds = false,
        locale = 'es-MX'
    } = options

    const now = ref(new Date())

    let timer = null

    // Actualiza la fecha/hora actual
    const updateClock = () => {
        now.value = new Date()
    }

    // Hora formateada
    const currentTime = computed(() => {
        return now.value.toLocaleTimeString(locale, {
            hour: '2-digit',
            minute: '2-digit',
            second: showSeconds ? '2-digit' : undefined,
            hour12
        })
    })

    // Fecha formateada
    const currentDate = computed(() => {
        return now.value.toLocaleDateString(locale, {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    })

    // Solo día de la semana
    const currentDay = computed(() => {
        return now.value.toLocaleDateString(locale, {
            weekday: 'long'
        })
    })

    onMounted(() => {
        updateClock()

        timer = setInterval(updateClock, 1000)
    })

    onUnmounted(() => {
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    })

    return {
        now,
        currentTime,
        currentDate,
        currentDay
    }
}