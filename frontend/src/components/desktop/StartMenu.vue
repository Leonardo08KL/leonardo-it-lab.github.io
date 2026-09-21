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