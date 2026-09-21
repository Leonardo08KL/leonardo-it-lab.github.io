<script setup>
import { computed, ref, onUnmounted } from 'vue'
import WindowTitleBar from './WindowTitleBar.vue'

const props = defineProps({
    window: {
        type: Object,
        required: true
    },

    title: {
        type: String,
        default: 'Application'
    },

    icon: {
        type: Object,
        default: null
    },

    width: {
        type: [Number, String],
        default: 700
    },

    height: {
        type: [Number, String],
        default: 450
    }
})

const emit = defineEmits([
    'close',
    'minimize',
    'maximize',
    'focus',
    'move'
])

/*
|--------------------------------------------------------------------------
| Drag & Drop
|--------------------------------------------------------------------------
*/

const dragging = ref(false)

const dragStart = {
    mouseX: 0,
    mouseY: 0,
    windowX: 0,
    windowY: 0
}

/**
 * Comienza a mover la ventana.
 */
const startDrag = (event) => {
    // Solo botón izquierdo
    if (event.button !== 0) return

    // Una ventana maximizada no se puede mover
    if (props.window.maximized) return

    dragging.value = true

    dragStart.mouseX = event.clientX
    dragStart.mouseY = event.clientY

    dragStart.windowX = props.window.position?.x || 0
    dragStart.windowY = props.window.position?.y || 0

    // La ventana pasa al frente
    emit('focus', props.window.id)

    window.addEventListener('mousemove', handleDrag)
    window.addEventListener('mouseup', stopDrag)
}

/**
 * Mueve la ventana mientras se arrastra.
 */
const handleDrag = (event) => {
    if (!dragging.value) return

    const deltaX =
        event.clientX - dragStart.mouseX

    const deltaY =
        event.clientY - dragStart.mouseY

    const newX =
        dragStart.windowX + deltaX

    const newY =
        dragStart.windowY + deltaY

    emit(
        'move',
        props.window.id,
        newX,
        newY
    )
}

/**
 * Termina el movimiento.
 */
const stopDrag = () => {
    if (!dragging.value) return

    dragging.value = false

    window.removeEventListener(
        'mousemove',
        handleDrag
    )

    window.removeEventListener(
        'mouseup',
        stopDrag
    )
}

/*
|--------------------------------------------------------------------------
| Window style
|--------------------------------------------------------------------------
*/

const windowStyle = computed(() => {
    if (props.window.maximized) {
        return {
            zIndex: props.window.zIndex
        }
    }

    return {
        width:
            typeof props.width === 'number'
                ? `${props.width}px`
                : props.width,

        height:
            typeof props.height === 'number'
                ? `${props.height}px`
                : props.height,

        zIndex: props.window.zIndex,

        left: `calc(50% + ${props.window.position?.x || 0
            }px)`,

        top: `calc(50% + ${props.window.position?.y || 0
            }px)`
    }
})

/*
|--------------------------------------------------------------------------
| Window controls
|--------------------------------------------------------------------------
*/

const handleFocus = () => {
    emit('focus', props.window.id)
}

const handleClose = () => {
    emit('close', props.window.id)
}

const handleMinimize = () => {
    emit('minimize', props.window.id)
}

const handleMaximize = () => {
    emit('maximize', props.window.id)
}

/*
|--------------------------------------------------------------------------
| Cleanup
|--------------------------------------------------------------------------
*/

onUnmounted(() => {
    window.removeEventListener(
        'mousemove',
        handleDrag
    )

    window.removeEventListener(
        'mouseup',
        stopDrag
    )
})
</script>

<template>
    <section v-if="!window.minimized" class="app-window" :class="{
        maximized: window.maximized,
        dragging
    }" :style="windowStyle" @mousedown="handleFocus">

        <WindowTitleBar :title="title" :icon="icon" :maximized="window.maximized" @close="handleClose"
            @minimize="handleMinimize" @maximize="handleMaximize" @drag-start="startDrag" />

        <div class="app-window-content">
            <slot />
        </div>

    </section>
</template>