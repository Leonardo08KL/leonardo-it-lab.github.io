<style>
.window-title-bar {
    height: 38px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px 0 12px;

    background: #111827;

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    user-select: none;

    cursor: default;
}

.window-title {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #e2e8f0;

    font-size: 12px;
    font-weight: 500;
}

.window-controls {
    display: flex;
    align-items: center;
    gap: 2px;
}
</style>

<script setup>
import WindowControls from './WindowControls.vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Application'
    },

    icon: {
        type: Object,
        default: null
    },

    maximized: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits([
    'close',
    'minimize',
    'maximize',
    'drag-start'
])

/**
 * Inicia el movimiento de la ventana.
 *
 * Solamente se activa con el botón izquierdo.
 * Los botones de control tienen stopPropagation
 * para evitar que también inicien el drag.
 */
const handleMouseDown = (event) => {
    if (event.button !== 0) return

    emit('drag-start', event)
}

/**
 * Doble clic en la barra:
 * maximizar / restaurar ventana.
 */
const handleDoubleClick = () => {
    emit('maximize')
}
</script>

<template>
    <header class="window-title-bar" @mousedown="handleMouseDown" @dblclick="handleDoubleClick">
        <div class="window-title">
            <component v-if="props.icon" :is="props.icon" :size="16" />

            <span>
                {{ props.title }}
            </span>
        </div>

        <WindowControls :maximized="props.maximized" @close="emit('close')" @minimize="emit('minimize')"
            @maximize="emit('maximize')" />
    </header>
</template>