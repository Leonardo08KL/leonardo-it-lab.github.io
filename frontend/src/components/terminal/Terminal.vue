<script setup>
import TerminalOutput from './TerminalOutput.vue'
import TerminalInput from './TerminalInput.vue'

import { useTerminal } from '../../composables/useTerminal'

const {
    terminalInput,
    terminalHistory,
    terminalEl,
    handleSubmit
} = useTerminal()
</script>

<template>
    <div class="terminal">
        <div ref="terminalEl" class="terminal-output">
            <TerminalOutput :history="terminalHistory" />

            <TerminalInput v-model="terminalInput" @submit="handleSubmit" />
        </div>
    </div>
</template>

<style scoped>
.terminal {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    background: #0b0f14;
    color: #d7e0ea;

    font-family:
        'Cascadia Code',
        'Fira Code',
        'JetBrains Mono',
        Consolas,
        monospace;

    font-size: 14px;
    line-height: 1.6;

    overflow: hidden;
}

.terminal-output {
    flex: 1;
    min-height: 0;

    padding: 16px;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin;
}

.terminal-output::-webkit-scrollbar {
    width: 8px;
}

.terminal-output::-webkit-scrollbar-track {
    background: #0b0f14;
}

.terminal-output::-webkit-scrollbar-thumb {
    background: #263241;
    border-radius: 4px;
}
</style>