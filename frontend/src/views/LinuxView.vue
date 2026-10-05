<script setup>
import {
    Terminal,
    Server,
    ShieldCheck,
    Activity,
    HardDrive,
    Network,
    User
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

const changeLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
}
const linuxTools = [
    {
        title: 'linux.terminal.title',
        description: 'linux.terminal.description',
        icon: Terminal
    },
    {
        title: 'linux.services.title',
        description: 'linux.services.description',
        icon: Server
    },
    {
        title: 'linux.security.title',
        description: 'linux.security.description',
        icon: ShieldCheck
    },
    {
        title: 'linux.monitoring.title',
        description: 'linux.monitoring.description',
        icon: Activity
    },
    {
        title: 'linux.storage.title',
        description: 'linux.storage.description',
        icon: HardDrive
    },
    {
        title: 'linux.networking.title',
        description: 'linux.networking.description',
        icon: Network
    }
]

const commands = [
    'systemctl status',
    'ip addr',
    'df -h',
    'free -h',
    'ps aux',
    'ss -tulpn'
]
</script>

<template>
    <section class="linux-view">

        <!-- ========================================
             HEADER
        ========================================= -->

        <header class="linux-header">

            <div class="linux-logo">
                <User :size="20" />
            </div>

            <div class="linux-title">
                <h2>{{ t('linux.title') }}</h2>

                <p>
                    {{ t('linux.description') }}
                </p>
            </div>

            <span class="linux-status">
                <span class="status-dot"></span>
                RUNNING
            </span>

        </header>


        <div class="linux-content">

            <!-- ========================================
                 ADMINISTRATION
            ========================================= -->

            <section class="linux-section">

                <h3 class="section-title">
                    <span class="title-indicator"></span>
                    {{ t('linux.admin.title') }}
                </h3>

                <div class="linux-tools">

                    <article v-for="(tool, index) in linuxTools" :key="tool.title" class="linux-tool" :style="{
                        '--delay': `${index * 80}ms`
                    }">

                        <div class="tool-icon">
                            <component :is="tool.icon" :size="20" />
                        </div>

                        <div class="tool-content">

                            <strong>
                                {{ t(tool.title) }}
                            </strong>

                            <p>
                                {{ t(tool.description) }}
                            </p>

                        </div>

                    </article>

                </div>

            </section>


            <!-- ========================================
                 COMMANDS
            ========================================= -->

            <section class="linux-section">

                <h3 class="section-title">
                    <span class="title-indicator"></span>
                    {{ t('linux.commands.title') }}
                </h3>

                <div class="commands">

                    <code v-for="(command, index) in commands" :key="command" class="command" :style="{
                        '--command-delay': `${index * 120}ms`
                    }">
                        <span class="prompt">$</span>

                        <span class="command-text">
                            {{ command }}
                        </span>

                        <span class="cursor"></span>
                    </code>

                </div>

            </section>


            <!-- ========================================
                 SYSTEM INFORMATION
            ========================================= -->

            <section class="linux-system">

                <div v-for="(item, index) in [
                    ['Operating System', 'Linux'],
                    ['Shell', 'bash'],
                    ['User', 'leonardo'],
                    ['Access', 'SSH']
                ]" :key="item[0]" class="system-item" :style="{
                    '--system-delay': `${index * 100}ms`
                }">

                    <span>
                        {{ item[0] }}
                    </span>

                    <strong>
                        {{ item[1] }}
                    </strong>

                </div>

            </section>

        </div>

    </section>
</template>


<style scoped>
/* ========================================
   MAIN CONTAINER
======================================== */

.linux-view {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;

    scrollbar-width: thin;
    scrollbar-color: #334155 transparent;
}


/* ========================================
   HEADER
======================================== */

.linux-header {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-bottom: 22px;

    animation: headerEnter 0.6s ease both;
}


/* ========================================
   LINUX LOGO
======================================== */

.linux-logo {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    flex-shrink: 0;

    border: 1px solid #263241;
    border-radius: 10px;

    background:
        linear-gradient(145deg,
            #172033,
            #111827);

    font-size: 25px;

    box-shadow:
        0 5px 15px rgba(0, 0, 0, 0.2);

    animation:
        logoEnter 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
}

.linux-logo:hover {
    transform:
        translateY(-3px) rotate(-4deg) scale(1.05);

    border-color: #3b82f6;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 15px rgba(59, 130, 246, 0.15);
}


/* ========================================
   TITLE
======================================== */

.linux-title {
    animation:
        titleEnter 0.6s 0.15s ease both;
}

.linux-header h2 {
    margin: 0 0 4px;

    color: #f8fafc;

    font-size: 21px;
    font-weight: 600;
}

.linux-header p {
    margin: 0;

    color: #94a3b8;

    font-size: 12px;
}


/* ========================================
   STATUS
======================================== */

.linux-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    margin-left: auto;

    padding: 5px 9px;

    border: 1px solid #14532d;
    border-radius: 5px;

    color: #86efac;

    background: #052e16;

    font-size: 10px;
    font-weight: 600;

    animation:
        statusEnter 0.6s 0.3s ease both;
}


/* ========================================
   STATUS DOT
======================================== */

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
        0 0 0 rgba(134, 239, 172, 0.7);

    animation:
        statusPulse 1.8s ease-in-out infinite;
}


/* ========================================
   SECTIONS
======================================== */

.linux-section {
    margin-bottom: 20px;
}


/* ========================================
   SECTION TITLE
======================================== */

.section-title {
    display: flex;
    align-items: center;
    gap: 7px;

    margin: 0 0 12px;

    color: #cbd5e1;

    font-size: 13px;
    font-weight: 600;

    animation:
        sectionTitleEnter 0.5s ease both;
}


.title-indicator {
    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #60a5fa;

    box-shadow:
        0 0 7px rgba(96, 165, 250, 0.6);
}


/* ========================================
   TOOLS GRID
======================================== */

.linux-tools {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(190px, 1fr));

    gap: 10px;
}


/* ========================================
   TOOL CARD
======================================== */

.linux-tool {
    position: relative;

    display: flex;

    gap: 12px;

    padding: 14px;

    overflow: hidden;

    border: 1px solid #263241;
    border-radius: 8px;

    background:
        linear-gradient(145deg,
            #111827,
            #0f172a);

    opacity: 0;

    transform:
        translateY(15px) scale(0.97);

    animation:
        toolEnter 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;

    animation-delay: var(--delay);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
}


/* ========================================
   CARD LIGHT
======================================== */

.linux-tool::before {
    content: '';

    position: absolute;

    top: -50%;
    left: -100%;

    width: 70%;
    height: 200%;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(96, 165, 250, 0.06),
            transparent);

    transform: skewX(-20deg);

    transition: left 0.6s ease;
}

.linux-tool:hover::before {
    left: 130%;
}


/* ========================================
   TOOL HOVER
======================================== */

.linux-tool:hover {
    transform:
        translateY(-4px);

    border-color: #334155;

    background:
        linear-gradient(145deg,
            #162033,
            #111827);

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.25),
        0 0 15px rgba(59, 130, 246, 0.06);
}


/* ========================================
   TOOL ICON
======================================== */

.tool-icon {
    width: 34px;
    height: 34px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 7px;

    background: #1e293b;
    color: #93c5fd;

    transition:
        transform 0.3s ease,
        color 0.3s ease,
        background 0.3s ease;
}

.linux-tool:hover .tool-icon {
    transform:
        rotate(-5deg) scale(1.08);

    color: #bfdbfe;

    background: #1d4ed8;
}


/* ========================================
   TOOL CONTENT
======================================== */

.tool-content {
    min-width: 0;
}

.linux-tool strong {
    color: #f8fafc;

    font-size: 12px;

    transition:
        color 0.25s ease;
}

.linux-tool:hover strong {
    color: #bfdbfe;
}

.linux-tool p {
    margin: 4px 0 0;

    color: #94a3b8;

    font-size: 11px;

    line-height: 1.5;
}


/* ========================================
   COMMAND TERMINAL
======================================== */

.commands {
    display: grid;

    gap: 7px;

    padding: 14px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #080c11;

    box-shadow:
        inset 0 0 25px rgba(0, 0, 0, 0.25);
}


/* ========================================
   COMMAND
======================================== */

.command {
    display: flex;
    align-items: center;

    min-height: 18px;

    color: #a7f3d0;

    font-family: monospace;
    font-size: 12px;

    opacity: 0;

    transform: translateX(-8px);

    animation:
        commandEnter 0.4s ease forwards;

    animation-delay: var(--command-delay);
}


/* ========================================
   PROMPT
======================================== */

.prompt {
    margin-right: 7px;

    color: #4ade80;

    font-weight: 700;
}


/* ========================================
   COMMAND TEXT
======================================== */

.command-text {
    transition:
        color 0.2s ease,
        text-shadow 0.2s ease;
}

.command:hover .command-text {
    color: #d1fae5;

    text-shadow:
        0 0 8px rgba(167, 243, 208, 0.35);
}


/* ========================================
   CURSOR
======================================== */

.cursor {
    width: 6px;
    height: 13px;

    margin-left: 5px;

    background: #86efac;

    opacity: 0;

    animation:
        cursorBlink 1s infinite;
}

.command:hover .cursor {
    opacity: 1;
}


/* ========================================
   SYSTEM INFORMATION
======================================== */

.linux-system {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(130px, 1fr));

    gap: 1px;

    overflow: hidden;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #263241;

    animation:
        systemEnter 0.6s 0.5s ease both;
}


/* ========================================
   SYSTEM ITEM
======================================== */

.system-item {
    display: flex;

    flex-direction: column;

    gap: 5px;

    padding: 13px;

    background: #111827;

    opacity: 0;

    animation:
        systemItemEnter 0.4s ease forwards;

    animation-delay:
        calc(0.5s + var(--system-delay));

    transition:
        background 0.25s ease;
}

.system-item:hover {
    background: #172033;
}


.linux-system span {
    color: #64748b;

    font-size: 10px;
}


.linux-system strong {
    color: #cbd5e1;

    font-size: 12px;

    transition:
        color 0.25s ease,
        transform 0.25s ease;
}

.system-item:hover strong {
    color: #93c5fd;

    transform: translateX(2px);
}


/* ========================================
   ANIMATIONS
======================================== */

@keyframes headerEnter {
    from {
        opacity: 0;
        transform: translateY(-12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


@keyframes logoEnter {
    from {
        opacity: 0;
        transform:
            scale(0.6) rotate(-15deg);
    }

    to {
        opacity: 1;
        transform:
            scale(1) rotate(0);
    }
}


@keyframes titleEnter {
    from {
        opacity: 0;
        transform: translateX(-15px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}


@keyframes statusEnter {
    from {
        opacity: 0;
        transform: translateX(10px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}


@keyframes statusPulse {

    0%,
    100% {
        opacity: 1;

        box-shadow:
            0 0 0 rgba(134, 239, 172, 0);
    }

    50% {
        opacity: 0.65;

        box-shadow:
            0 0 8px rgba(134, 239, 172, 0.6);
    }
}


@keyframes sectionTitleEnter {
    from {
        opacity: 0;
        transform: translateX(-8px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}


@keyframes toolEnter {
    from {
        opacity: 0;

        transform:
            translateY(15px) scale(0.97);
    }

    to {
        opacity: 1;

        transform:
            translateY(0) scale(1);
    }
}


@keyframes commandEnter {
    from {
        opacity: 0;

        transform:
            translateX(-8px);
    }

    to {
        opacity: 1;

        transform:
            translateX(0);
    }
}


@keyframes cursorBlink {

    0%,
    45% {
        opacity: 1;
    }

    46%,
    100% {
        opacity: 0;
    }
}


@keyframes systemEnter {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


@keyframes systemItemEnter {
    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* ========================================
   SCROLLBAR
======================================== */

.linux-view::-webkit-scrollbar {
    width: 6px;
}

.linux-view::-webkit-scrollbar-track {
    background: transparent;
}

.linux-view::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background: #334155;
}

.linux-view::-webkit-scrollbar-thumb:hover {
    background: #475569;
}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {

    .linux-header,
    .linux-logo,
    .linux-title,
    .linux-status,
    .linux-tool,
    .command,
    .linux-system,
    .system-item {
        animation: none;

        opacity: 1;

        transform: none;
    }

    .status-dot {
        animation: none;
    }

    .linux-tool,
    .tool-icon,
    .linux-logo,
    .system-item,
    .linux-system strong {
        transition: none;
    }
}
</style>
