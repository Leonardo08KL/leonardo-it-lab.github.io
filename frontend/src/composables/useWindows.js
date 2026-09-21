import { ref, computed } from 'vue'

const windows = ref([])
const zCounter = ref(10)

let windowPositionIndex = 0

export function useWindows() {
    /**
     * Abre una ventana.
     * Si ya existe, simplemente la restaura y la pone al frente.
     */
    const openWindow = (type) => {
        const existingWindow = windows.value.find(
            window => window.type === type
        )

        if (existingWindow) {
            existingWindow.minimized = false
            focusWindow(existingWindow.id)
            return
        }

        const id = `${type}-${Date.now()}`

        const offset =
            (windowPositionIndex % 5) * 35

        windows.value.push({
            id,
            type,
            minimized: false,
            maximized: false,

            zIndex: ++zCounter.value,

            position: {
                x: offset,
                y: offset
            }
        })

        windowPositionIndex++
    }

    /**
     * Cierra una ventana.
     */
    const closeWindow = (id) => {
        windows.value = windows.value.filter(
            window => window.id !== id
        )

        if (windows.value.length === 0) {
            windowPositionIndex = 0
        }
    }

    /**
     * Minimiza una ventana.
     */
    const minimizeWindow = (id) => {
        const window = windows.value.find(
            window => window.id === id
        )

        if (!window) return

        window.minimized = true
    }

    /**
     * Restaura una ventana minimizada.
     */
    const restoreWindow = (id) => {
        const window = windows.value.find(
            window => window.id === id
        )

        if (!window) return

        window.minimized = false
        focusWindow(id)
    }

    /**
     * Pone una ventana al frente.
     */
    const focusWindow = (id) => {
        const window = windows.value.find(
            window => window.id === id
        )

        if (!window) return

        window.minimized = false
        window.zIndex = ++zCounter.value
    }

    /**
     * Maximiza o restaura una ventana.
     */
    const maximizeWindow = (id) => {
        const window = windows.value.find(
            window => window.id === id
        )

        if (!window) return

        window.maximized = !window.maximized

        focusWindow(id)
    }

    /**
     * Mueve una ventana.
     */
    const moveWindow = (id, x, y) => {
        const window = windows.value.find(
            window => window.id === id
        )

        if (!window) return

        // No permitimos mover una ventana maximizada.
        if (window.maximized) return

        window.position.x = x
        window.position.y = y
    }

    /**
     * Ventanas que actualmente no están minimizadas.
     */
    const desktopWindows = computed(() =>
        windows.value.filter(
            window => !window.minimized
        )
    )

    /**
     * Todas las ventanas abiertas.
     */
    const openWindows = computed(() =>
        windows.value
    )

    return {
        windows,
        openWindows,
        desktopWindows,

        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        focusWindow,
        maximizeWindow,
        moveWindow
    }
}