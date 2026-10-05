<style>
.start-menu {
    position: fixed;

    left: 12px;
    bottom: 58px;

    width: 380px;
    max-height: 620px;

    display: flex;
    flex-direction: column;

    background: rgba(15, 23, 42, 0.97);
    border: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 10px;

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.4);

    backdrop-filter: blur(18px);

    overflow: hidden;

    z-index: 10000;
}

.start-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px;
}

.profile {
    display: flex;
    align-items: center;
    gap: 12px;
}

.profile-avatar {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.08);

    border-radius: 50%;

    font-size: 22px;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.profile-info strong {
    color: #fff;
    font-size: 14px;
}

.profile-info span {
    color: #94a3b8;
    font-size: 12px;
}

.close-menu {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    color: #94a3b8;

    border-radius: 6px;

    cursor: pointer;
}

.close-menu:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
}

.start-menu-search {
    padding: 0 16px 14px;
}

.start-menu-search input {
    width: 100%;
    height: 36px;

    box-sizing: border-box;

    padding: 0 12px;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.08);

    border-radius: 6px;

    outline: none;

    color: white;

    font-size: 13px;
}

.start-menu-search input::placeholder {
    color: #64748b;
}

.start-menu-search input:focus {
    border-color: rgba(96, 165, 250, 0.6);
}

.start-menu-section {
    padding: 0 10px;

    overflow-y: auto;
}

.section-title {
    padding: 8px 8px;

    color: #64748b;

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.applications {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 4px;
}

.application-item {
    min-height: 62px;

    display: flex;
    align-items: center;

    gap: 10px;

    padding: 8px;

    background: transparent;

    border: none;

    border-radius: 7px;

    color: white;

    text-align: left;

    cursor: pointer;
}

.application-item:hover {
    background: rgba(255, 255, 255, 0.08);
}

.application-icon {
    width: 34px;
    height: 34px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(96, 165, 250, 0.1);

    color: #93c5fd;

    border-radius: 7px;
}

.application-info {
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 3px;
}

.application-info strong {
    font-size: 12px;

    white-space: nowrap;
}

.application-info span {
    color: #64748b;

    font-size: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.start-menu-footer {
    margin-top: auto;

    padding: 12px 16px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #94a3b8;

    font-size: 12px;
}

/* =========================================
   START MENU
========================================= */

.start-menu {
    position: absolute;

    left: 8px;
    bottom: 60px;

    z-index: 300;

    width: 340px;
    max-height: calc(100vh - 120px);

    display: flex;
    flex-direction: column;

    overflow: hidden;

    border: 1px solid #334155;
    border-radius: 10px;

    background: rgba(15, 23, 42, 0.98);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.5);

    backdrop-filter: blur(15px);
}

.start-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px;

    border-bottom: 1px solid #263241;
}

.profile {
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile-avatar {
    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    border-radius: 8px;

    background: #1e293b;

    font-size: 19px;
}

.profile-info strong,
.profile-info span {
    display: block;
}

.profile-info strong {
    color: #f8fafc;
    font-size: 12px;
}

.profile-info span {
    margin-top: 2px;

    color: #64748b;
    font-size: 10px;
}

.close-menu {
    width: 30px;
    height: 30px;

    display: grid;
    place-items: center;

    border-radius: 5px;

    background: transparent;
    color: #64748b;

    cursor: pointer;
}

.close-menu:hover {
    background: #1e293b;
    color: #f8fafc;
}

.start-menu-search {
    padding: 12px;
}

.start-menu-search input {
    width: 100%;

    padding: 9px 11px;

    border: 1px solid #334155;
    border-radius: 6px;

    outline: none;

    background: #0b1220;
    color: #e2e8f0;

    font-size: 11px;
}

.start-menu-search input::placeholder {
    color: #64748b;
}

.start-menu-search input:focus {
    border-color: #3b82f6;
}

.start-menu-section {
    min-height: 0;

    padding: 0 12px 12px;

    overflow-y: auto;
}

.section-title {
    margin-bottom: 8px;

    color: #64748b;

    font-size: 10px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.applications {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 5px;
}

.application-item {
    display: flex;
    align-items: center;

    gap: 9px;

    min-width: 0;

    padding: 9px;

    border-radius: 7px;

    background: transparent;
    color: #cbd5e1;

    text-align: left;

    cursor: pointer;
}

.application-item:hover {
    background: #1e293b;
}

.application-icon {
    width: 30px;
    height: 30px;

    display: grid;
    place-items: center;

    flex-shrink: 0;

    border-radius: 6px;

    background: #1e293b;
    color: #93c5fd;
}

.application-info {
    min-width: 0;
}

.application-info strong,
.application-info span {
    display: block;

    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
}

.application-info strong {
    color: #e2e8f0;
    font-size: 10px;
}

.application-info span {
    margin-top: 2px;

    color: #64748b;
    font-size: 8px;
}

.start-menu-footer {
    padding: 10px 14px;

    border-top: 1px solid #263241;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 7px;

    color: #64748b;

    font-family: monospace;
    font-size: 9px;
}

/* =========================================
   TRANSITIONS
========================================= */

.start-menu-enter-active,
.start-menu-leave-active {
    transition:
        opacity 0.15s ease,
        transform 0.15s ease;
}

.start-menu-enter-from,
.start-menu-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 700px) {
    .top-status>span:not(.system-status) {
        display: none;
    }

    .taskbar-app span {
        display: none;
    }

    .taskbar-app {
        width: 38px;
        justify-content: center;
        padding: 0;
    }

    .start-menu {
        width: calc(100vw - 16px);
    }

    .applications {
        grid-template-columns: 1fr;
    }

    .app-window:not(.maximized) {
        width: calc(100% - 20px) !important;
        height: calc(100% - 20px) !important;
    }
}
</style>

<script setup>
import {
    Terminal,
    Network,
    Server,
    FolderGit2,
    FileText,
    User,
    Code2,
    Cpu,
    X
} from 'lucide-vue-next'

defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits([
    'open-window',
    'close'
])

const applications = [
    {
        type: 'terminal',
        title: 'Terminal',
        description: 'Linux command line',
        icon: Terminal
    },
    {
        type: 'network',
        title: 'Network Lab',
        description: 'Redes e infraestructura',
        icon: Network
    },
    {
        type: 'linux',
        title: 'Linux Lab',
        description: 'Administración Linux',
        icon: Server
    },
    {
        type: 'projects',
        title: 'Projects',
        description: 'Proyectos de desarrollo',
        icon: FolderGit2
    },
    {
        type: 'skills',
        title: 'Skills',
        description: 'Tecnologías y habilidades',
        icon: Code2
    },
    {
        type: 'hardware',
        title: 'Hardware',
        description: 'Soporte y mantenimiento',
        icon: Cpu
    },
    {
        type: 'cv',
        title: 'CV',
        description: 'Currículum profesional',
        icon: FileText
    },
    {
        type: 'about',
        title: 'About',
        description: 'Sobre Leonardo',
        icon: User
    },
    {
        type: 'personal',
        title: 'Personal',
        description: 'Información personal',
        icon: User
    }
]

const openApplication = (type) => {
    emit('open-window', type)
    emit('close')
}
</script>

<template>
    <Transition name="start-menu">

        <div v-if="visible" class="start-menu" @click.stop>

            <!-- HEADER -->
            <div class="start-menu-header">

                <div class="profile">

                    <div class="profile-avatar">
                        🐧
                    </div>

                    <div class="profile-info">
                        <strong>Leonardo</strong>
                        <span>IT Lab</span>
                    </div>

                </div>

                <button class="close-menu" type="button" title="Cerrar menú" @click="emit('close')">
                    <X :size="18" />
                </button>

            </div>

            <!-- SEARCH -->
            <div class="start-menu-search">

                <input type="text" placeholder="Buscar aplicaciones..." />

            </div>

            <!-- APPLICATIONS -->
            <div class="start-menu-section">

                <div class="section-title">
                    Aplicaciones
                </div>

                <div class="applications">

                    <button v-for="application in applications" :key="application.type" class="application-item"
                        type="button" @click="openApplication(application.type)">

                        <div class="application-icon">
                            <component :is="application.icon" :size="20" />
                        </div>

                        <div class="application-info">

                            <strong>
                                {{ application.title }}
                            </strong>

                            <span>
                                {{ application.description }}
                            </span>

                        </div>

                    </button>

                </div>

            </div>

            <!-- FOOTER -->
            <div class="start-menu-footer">

                <div class="user-info">
                    <User :size="17" />

                    <span>
                        leonardo@it-lab
                    </span>
                </div>

            </div>

        </div>

    </Transition>
</template>