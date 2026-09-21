<script setup>
import { nextTick, ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})

const emit = defineEmits([
    'update:modelValue',
    'submit'
])

const inputEl = ref(null)

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}

const handleKeydown = async (event) => {
    if (event.key !== 'Enter') {
        return
    }

    event.preventDefault()

    const command = props.modelValue

    if (!command.trim()) {
        return
    }

    emit('submit', command)

    await nextTick()

    inputEl.value?.focus()
}
</script>

<template>
    <div class="terminal-input">
        <span class="terminal-prompt">
            leonardo@it-lab:~$
        </span>

        <input ref="inputEl" :value="modelValue" type="text" autocomplete="off" spellcheck="false" autofocus
            @input="updateValue" @keydown="handleKeydown" />
    </div>
</template>

<style scoped>
.terminal-input {
    display: flex;
    align-items: center;

    min-height: 24px;

    color: #a7f3d0;
}

.terminal-prompt {
    flex-shrink: 0;
    margin-right: 8px;
}

.terminal-input input {
    flex: 1;

    min-width: 0;

    border: 0;
    outline: 0;

    background: transparent;
    color: #f1f5f9;

    font: inherit;
}

.terminal-input input::selection {
    background: #334155;
}
</style>