<script setup>
import { ref, onMounted } from 'vue'

import TopBar from './TopBar.vue'
import StartMenu from './StartMenu.vue'
import DesktopIcon from './DesktopIcon.vue'
import Taskbar from './Taskbar.vue'
import AppWindow from '../windows/AppWindow.vue'

import { useWindows } from '../../composables/useWindows'
import { useApi } from '../../composables/useApi'

import { windowDefinitions } from '../../data/windowDefinitions'
import { desktopIcons } from '../../data/desktopIcons'
import { windowComponents } from '../../data/windowComponents'

const startMenu = ref(false)
const selectedIcon = ref(null)

const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    maximizeWindow,
    moveWindow,
} = useWindows()

const {
    apiStatus,
    checkApi
} = useApi()

onMounted(() => {
    checkApi()
})

const getWindowDefinition = (type) => {
    return windowDefinitions[type] || {}
}

const toggleStartMenu = () => {
    startMenu.value = !startMenu.value
}

const closeStartMenu = () => {
    startMenu.value = false
}

const handleOpenWindow = (type) => {
    openWindow(type)
    closeStartMenu()
}

const handleSelectIcon = (type) => {
    selectedIcon.value = type
}

const handleOpenIcon = (type) => {
    selectedIcon.value = type
    openWindow(type)
}

const handlePower = () => {
    const confirmed = window.confirm(
        '¿Quieres apagar Leonardo IT Lab?'
    )

    if (!confirmed) return

    windows.value.forEach(window => {
        window.minimized = true
    })

    startMenu.value = false
}
</script>

<template>
    <main class="desktop">

        <TopBar :api-status="apiStatus" @toggle-menu="toggleStartMenu" />

        <StartMenu :visible="startMenu" @open-window="handleOpenWindow" @close="closeStartMenu" />

        <section class="desktop-area" @click="
            selectedIcon = null;
        closeStartMenu()
            ">

            <div class="desktop-icons">

                <DesktopIcon v-for="item in desktopIcons" :key="item.type" :type="item.type" :title="item.title"
                    :icon="item.icon" :selected="selectedIcon === item.type" @select="handleSelectIcon"
                    @open="handleOpenIcon" />

            </div>

            <div class="windows-container">
                <Transition v-for="window in windows" :key="window.id" name="window">
                    <AppWindow :window="window" :title="getWindowDefinition(window.type).title"
                        :icon="getWindowDefinition(window.type).icon" :width="getWindowDefinition(window.type).width"
                        :height="getWindowDefinition(window.type).height" @close="closeWindow"
                        @minimize="minimizeWindow" @maximize="maximizeWindow" @focus="focusWindow" @move="moveWindow">
                        <component :is="windowComponents[window.type]" />
                    </AppWindow>
                </Transition>

            </div>

        </section>

        <Taskbar :windows="windows" @toggle-menu="toggleStartMenu" @focus-window="focusWindow" @power="handlePower"
            @change-language="changeLanguage" />

    </main>
</template>

<style>
/* =========================================
   WINDOWS CONTAINER
========================================= */

.windows-container {
    position: absolute;

    inset: 0;

    z-index: 10;

    pointer-events: none;
}

/* =========================================
   DESKTOP
========================================= */

.desktop {
    position: relative;

    width: 100%;
    height: 100vh;

    overflow: hidden;

    background:
        radial-gradient(circle at 50% 35%,
            #172033 0%,
            #0b1220 45%,
            #020617 100%);
}

/* =========================================
   DESKTOP AREA
========================================= */

.desktop-area {
    position: absolute;

    top: 42px;
    right: 0;
    bottom: 52px;
    left: 0;

    overflow: auto;

    scroll-behavior: smooth;
    cursor: default;

    min-width: 0;
    min-height: 0;
}
</style>