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

    const x = props.window.position?.x ?? 0
    const y = props.window.position?.y ?? 0

    return {
        width:
            typeof props.width === 'number'
                ? `${props.width}%`
                : props.width,

        height:
            typeof props.height === 'number'
                ? `${props.height}%`
                : props.height,

        zIndex: props.window.zIndex,

        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`
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

<style>
/* ==========================================================================
   APP WINDOW
   ========================================================================== */

.app-window {
    position: absolute;

    top: 50%;
    left: 50%;

    display: flex;
    flex-direction: column;

    min-width: 320px;
    min-height: 220px;

    overflow: hidden;

    border: 1px solid #334155;
    border-radius: 9px;

    background: #0f172a;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.45),
        0 5px 15px rgba(0, 0, 0, 0.25);

    /*
     * Siempre parte exactamente del centro.
     */
    transform: translate(-50%, -50%);

    /*
     * No hay animación al abrir.
     */
    animation: none;

    /*
     * Evita efectos visuales innecesarios
     * mientras se mueve la ventana.
     */
    will-change: left, top;

    pointer-events: auto;

    z-index: 1;
}


/* ==========================================================================
   WINDOW CONTENT
   ========================================================================== */

.app-window-content {
    flex: 1;

    min-width: 0;
    min-height: 0;

    overflow: hidden;

    background: #0f172a;
}


/* ==========================================================================
   MAXIMIZED WINDOW
   ========================================================================== */

.app-window.maximized {
    top: 0;
    left: 0;

    width: 100% !important;
    height: 100% !important;

    border: 0;
    border-radius: 0;

    transform: none;
}


/* ==========================================================================
   DRAGGING
   ========================================================================== */

.app-window.dragging {
    cursor: grabbing;

    user-select: none;
}


/* ==========================================================================
   REDUCE MOTION
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
    .app-window {
        animation: none;
        transition: none;
    }
}
</style>