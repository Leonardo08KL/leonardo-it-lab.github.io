<style>
.taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 48px;

    display: flex;
    align-items: center;

    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(12px);

    z-index: 9999;
}

.taskbar-start {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    color: #fff;

    cursor: pointer;
}

.taskbar-start:hover {
    background: rgba(255, 255, 255, 0.08);
}

.taskbar-apps {
    display: flex;
    align-items: center;
    gap: 4px;

    flex: 1;

    padding: 0 8px;

    overflow-x: auto;
}

.taskbar-app {
    height: 36px;

    display: flex;
    align-items: center;
    gap: 8px;

    padding: 0 12px;

    background: transparent;
    border: none;

    color: #cbd5e1;

    border-radius: 6px;

    cursor: pointer;

    white-space: nowrap;
}

.taskbar-app:hover {
    background: rgba(255, 255, 255, 0.08);
}

.taskbar-app.active {
    background: rgba(255, 255, 255, 0.12);
    color: white;

    border-bottom: 2px solid #60a5fa;
}

.taskbar-system {
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 0 12px;

    color: #cbd5e1;

    font-size: 13px;
}

.network-status {
    display: flex;
    align-items: center;
    gap: 6px;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #22c55e;
}

.taskbar-time {
    min-width: 45px;

    text-align: center;

    font-variant-numeric: tabular-nums;
}

.taskbar-power {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    background: transparent;
    border: none;

    color: #cbd5e1;

    cursor: pointer;
}

.taskbar-power:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
}
</style>

<script setup>
import {
    Menu,
    Terminal,
    Network,
    Server,
    FolderGit2,
    FileText,
    Monitor,
    Power
} from 'lucide-vue-next'

import { useClock } from '../../composables/useClock'

const props = defineProps({
    windows: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits([
    'toggle-menu',
    'focus-window',
    'power'
])

const { currentTime } = useClock({
    hour12: false,
    showSeconds: false
})

const windowIcons = {
    terminal: Terminal,
    network: Network,
    linux: Server,
    projects: FolderGit2,
    cv: FileText,
    about: Monitor
}

const getWindowIcon = (type) => {
    return windowIcons[type] || Monitor
}

const getWindowTitle = (window) => {
    const titles = {
        terminal: 'Terminal',
        network: 'Network Lab',
        linux: 'Linux Lab',
        projects: 'Projects',
        cv: 'CV',
        about: 'About'
    }

    return titles[window.type] || window.type
}
</script>

<template>
    <footer class="taskbar">

        <!-- START -->
        <button class="taskbar-start" type="button" title="Menú principal" @click="emit('toggle-menu')">
            <Menu :size="20" />
        </button>

        <!-- APPLICATIONS -->
        <div class="taskbar-apps">

            <button v-for="window in props.windows" :key="window.id" class="taskbar-app"
                :class="{ active: !window.minimized }" type="button" :title="getWindowTitle(window)"
                @click="emit('focus-window', window.id)">
                <component :is="getWindowIcon(window.type)" :size="18" />

                <span>
                    {{ getWindowTitle(window) }}
                </span>
            </button>

        </div>

        <!-- SYSTEM -->
        <div class="taskbar-system">

            <span class="network-status">
                <span class="status-dot"></span>
                ONLINE
            </span>

            <span class="taskbar-time">
                {{ currentTime }}
            </span>

            <button class="taskbar-power" type="button" title="Apagar" @click="emit('power')">
                <Power :size="18" />
            </button>

        </div>

    </footer>
</template>