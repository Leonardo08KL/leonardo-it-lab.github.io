<style>
.desktop-icon {
    width: 90px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    padding: 10px 6px;

    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;

    color: white;

    cursor: default;
    user-select: none;
}

.desktop-icon:hover {
    background: rgba(255, 255, 255, 0.08);
}

.desktop-icon.selected {
    background: rgba(96, 165, 250, 0.18);
    border-color: rgba(96, 165, 250, 0.3);
}

.desktop-icon-image {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #93c5fd;

    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.desktop-icon-title {
    max-width: 85px;

    color: #e2e8f0;

    font-size: 12px;
    line-height: 15px;

    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
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