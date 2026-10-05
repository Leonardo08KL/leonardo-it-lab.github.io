<style>
/* =========================================
   DESKTOP ICONS
========================================= */

.desktop-icons {
    position: absolute;

    top: 20px;
    left: 18px;

    z-index: 2;

    display: grid;

    grid-template-columns: 86px;

    gap: 8px;
}

.desktop-icon {
    width: 82px;
    min-height: 82px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 6px;

    padding: 7px;

    border: 1px solid transparent;
    border-radius: 8px;

    background: transparent;
    color: #cbd5e1;

    cursor: pointer;

    user-select: none;

    transition:
        background 0.15s ease,
        border-color 0.15s ease;
}

.desktop-icon:hover {
    background: rgba(30, 41, 59, 0.75);
}

.desktop-icon.selected {
    border-color: rgba(96, 165, 250, 0.45);
    background: rgba(59, 130, 246, 0.16);
}

.desktop-icon-image {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    color: #93c5fd;
}

.desktop-icon-title {
    max-width: 76px;

    overflow: hidden;

    color: #e2e8f0;

    font-size: 11px;
    line-height: 1.2;

    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    icon: {
        type: Object,
        required: true
    },

    selected: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits([
    'open',
    'select'
])

const IconComponent = computed(() => props.icon)

const handleClick = () => {
    emit('select', props.type)
}

const handleDoubleClick = () => {
    emit('open', props.type)
}
</script>

<template>
    <button class="desktop-icon" :class="{ selected }" type="button" @click="handleClick" @dblclick="handleDoubleClick">

        <div class="desktop-icon-image">
            <component :is="IconComponent" :size="32" :stroke-width="1.7" />
        </div>

        <span class="desktop-icon-title">
            {{ title }}
        </span>

    </button>
</template>