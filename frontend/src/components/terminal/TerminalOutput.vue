<script setup>
defineProps({
    history: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="terminal-history">
        <div v-for="(entry, index) in history" :key="index" class="terminal-line" :class="`terminal-${entry.type}`">
            {{ entry.text }}
        </div>
    </div>
</template>

<style scoped>
.terminal-history {
    white-space: pre-wrap;
    word-break: break-word;
}

.terminal-line {
    min-height: 1.6em;
}

.terminal-system {
    color: #7dd3fc;
}

.terminal-command {
    color: #a7f3d0;
}

.terminal-output {
    color: #d7e0ea;
}

.terminal-error {
    color: #fca5a5;
}
</style>