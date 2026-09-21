import { ref, nextTick } from 'vue'
import { terminalCommands } from '../data/terminalCommands'

export function useTerminal() {
    const terminalInput = ref('')

    const terminalHistory = ref([
        {
            type: 'system',
            text: 'Leonardo IT Lab Terminal'
        },
        {
            type: 'system',
            text: 'Type "help" to see available commands.'
        },
        {
            type: 'system',
            text: ''
        }
    ])

    const terminalEl = ref(null)

    const scrollToBottom = async () => {
        await nextTick()

        if (terminalEl.value) {
            terminalEl.value.scrollTop =
                terminalEl.value.scrollHeight
        }
    }

    const clearTerminal = async () => {
        terminalHistory.value = []

        await scrollToBottom()
    }

    const executeCommand = async (command) => {
        const cleanCommand = command.trim()

        if (!cleanCommand) {
            return
        }

        terminalHistory.value.push({
            type: 'command',
            text: `leonardo@it-lab:~$ ${cleanCommand}`
        })

        const normalizedCommand = cleanCommand.toLowerCase()

        if (normalizedCommand === 'clear') {
            terminalInput.value = ''

            await clearTerminal()

            return
        }

        const commandHandler =
            terminalCommands[normalizedCommand]

        if (commandHandler) {
            const output = commandHandler()

            output.forEach(line => {
                terminalHistory.value.push({
                    type: 'output',
                    text: line
                })
            })
        } else {
            terminalHistory.value.push({
                type: 'error',
                text: `Command not found: ${cleanCommand}`
            })

            terminalHistory.value.push({
                type: 'output',
                text: 'Type "help" to see available commands.'
            })
        }

        terminalInput.value = ''

        await scrollToBottom()
    }

    const handleSubmit = (command) => {
        executeCommand(command)
    }

    return {
        terminalInput,
        terminalHistory,
        terminalEl,
        executeCommand,
        handleSubmit,
        clearTerminal,
        scrollToBottom
    }
}