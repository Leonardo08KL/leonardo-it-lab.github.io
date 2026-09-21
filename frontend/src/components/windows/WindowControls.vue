<style>
.window-control {
    width: 30px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    color: #94a3b8;

    border-radius: 5px;

    cursor: pointer;
}

.window-control:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
}

.window-control.close:hover {
    background: #dc2626;
    color: white;
}
</style>
<script setup>
import {
    Minus,
    Maximize2,
    Minimize2,
    X
} from 'lucide-vue-next'

defineProps({
    maximized: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits([
    'close',
    'minimize',
    'maximize'
])
</script>

<template>
    <div class="window-controls" @mousedown.stop @dblclick.stop>
        <button class="window-control" type="button" title="Minimizar" @click.stop="emit('minimize')">
            <Minus :size="14" />
        </button>

        <button class="window-control" type="button" :title="maximized ? 'Restaurar' : 'Maximizar'"
            @click.stop="emit('maximize')">
            <Minimize2 v-if="maximized" :size="13" />

            <Maximize2 v-else :size="13" />
        </button>

        <button class="window-control close" type="button" title="Cerrar" @click.stop="emit('close')">
            <X :size="14" />
        </button>
    </div>
</template>