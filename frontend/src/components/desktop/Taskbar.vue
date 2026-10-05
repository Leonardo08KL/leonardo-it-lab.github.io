<script setup>

import { useI18n } from 'vue-i18n'

import {
    Menu,
    Terminal,
    Network,
    Server,
    FolderGit2,
    FileText,
    Monitor,
    Power,
    Languages
} from 'lucide-vue-next'

import { useClock } from '../../composables/useClock'
// import { useLanguage } from '../../composables/useLanguage'
import { taskBar } from '../../data/taskbar'

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


/*
|--------------------------------------------------------------------------
| LANGUAGE
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| CHANGE LANGUAGE
|--------------------------------------------------------------------------
*/

const { locale, t } = useI18n()

const changeLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
}

/*
|--------------------------------------------------------------------------
| CLOCK
|--------------------------------------------------------------------------
*/

const { currentTime } = useClock({
    hour12: false,
    showSeconds: false
})


/*
|--------------------------------------------------------------------------
| WINDOW ICONS
|--------------------------------------------------------------------------
*/

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


/*
|--------------------------------------------------------------------------
| WINDOW TITLES
|--------------------------------------------------------------------------
*/

const getWindowTitle = (window) => {

    const titles = {

        terminal: 'terminal',
        network: 'network',
        linux: 'linux',
        projects: 'projects',
        cv: 'cv',
        about: 'about'

    }

    return t(taskBar.toSorted((a, b) => a.title.localeCompare(b.title))[0]?.title || window.type)

}

</script>


<template>

    <footer class="taskbar">


        <!--
        |--------------------------------------------------------------------------
        | START
        |--------------------------------------------------------------------------
        -->

        <button class="taskbar-start" type="button" :title="t('taskbar.start')" @click="emit('toggle-menu')">

            <Menu :size="19" />

        </button>


        <!--
        |--------------------------------------------------------------------------
        | APPLICATIONS
        |--------------------------------------------------------------------------
        -->

        <div class="taskbar-apps">

            <TransitionGroup name="taskbar-app">

                <button v-for="window in props.windows" :key="window.id" class="taskbar-app" :class="{
                    active: !window.minimized
                }" type="button" :title="getWindowTitle(window)" @click="emit('focus-window', window.id)">

                    <component :is="getWindowIcon(window.type)" :size="17" class="taskbar-app-icon" />

                    <span>
                        {{ getWindowTitle(window) }}
                    </span>

                </button>

            </TransitionGroup>

        </div>


        <!--
        |--------------------------------------------------------------------------
        | SYSTEM
        |--------------------------------------------------------------------------
        -->

        <div class="taskbar-system">


            <!--
            |--------------------------------------------------------------------------
            | LANGUAGE
            |--------------------------------------------------------------------------
            -->
            <button class="change-language" type="button" :title="locale === 'es'
                ? t('en')
                : t('es')
                " @click="changeLanguage">

                <Languages :size="17" class="language-icon" />

                <Transition name="language-switch" mode="out-in">

                    <span :key="locale" class="language-label">
                        {{ locale.toUpperCase() }}
                    </span>

                </Transition>

            </button>


            <!--
            |--------------------------------------------------------------------------
            | NETWORK
            |--------------------------------------------------------------------------
            -->

            <span class="network-status">

                <span class="status-dot"></span>

                <span class="network-label">
                    {{ t(locale === 'es'
                        ? 'taskbar.online'
                        : 'taskbar.offline'
                    ) }}
                </span>

            </span>


            <!--
            |--------------------------------------------------------------------------
            | CLOCK
            |--------------------------------------------------------------------------
            -->

            <span class="taskbar-time">
                {{ currentTime }}
            </span>


            <!--
            |--------------------------------------------------------------------------
            | POWER
            |--------------------------------------------------------------------------
            -->

            <button class="taskbar-power" type="button" :title="t('taskbar.shutdown')" @click="emit('power')">

                <Power :size="17" />

            </button>


        </div>

    </footer>

</template>


<style scoped>
/* =========================================================
   TASKBAR
   ========================================================= */

.taskbar {

    position: absolute;

    right: 0;
    bottom: 0;
    left: 0;

    height: 52px;

    z-index: 200;

    display: flex;
    align-items: center;

    padding: 0 8px;

    border-top: 1px solid rgba(148, 163, 184, .14);

    background:
        linear-gradient(180deg,
            rgba(15, 23, 42, .94),
            rgba(10, 15, 27, .98));

    backdrop-filter: blur(14px);

    box-shadow:
        0 -4px 18px rgba(0, 0, 0, .18);

    animation:
        taskbar-enter 400ms cubic-bezier(.22, 1, .36, 1) both;

}


/* =========================================================
   START
   ========================================================= */

.taskbar-start {

    position: relative;

    width: 38px;
    height: 36px;

    display: grid;
    place-items: center;

    flex-shrink: 0;

    border: 1px solid transparent;
    border-radius: 7px;

    background: transparent;

    color: #cbd5e1;

    cursor: pointer;

    transition:
        color 160ms ease,
        background 160ms ease,
        border-color 160ms ease,
        transform 160ms ease,
        box-shadow 160ms ease;

}


.taskbar-start:hover {

    color: #f8fafc;

    background:
        rgba(148, 163, 184, .10);

    border-color:
        rgba(148, 163, 184, .12);

    transform:
        translateY(-1px);

    box-shadow:
        0 4px 12px rgba(0, 0, 0, .15);

}


.taskbar-start:active {

    transform:
        translateY(0) scale(.94);

}


.taskbar-start svg {

    transition:
        transform 220ms cubic-bezier(.22, 1, .36, 1);

}


.taskbar-start:hover svg {

    transform:
        rotate(-4deg) scale(1.08);

}


/* =========================================================
   APPLICATIONS
   ========================================================= */

.taskbar-apps {

    display: flex;
    align-items: center;

    gap: 4px;

    margin-left: 8px;

    min-width: 0;

    flex: 1;

    overflow-x: auto;
    overflow-y: hidden;

    scrollbar-width: none;

}


.taskbar-apps::-webkit-scrollbar {
    display: none;
}


/* =========================================================
   APPLICATION BUTTON
   ========================================================= */

.taskbar-app {

    position: relative;

    height: 36px;

    display: flex;
    align-items: center;

    gap: 7px;

    max-width: 150px;

    padding: 0 10px;

    border: 1px solid transparent;
    border-radius: 7px;

    background: transparent;

    color: #94a3b8;

    cursor: pointer;

    white-space: nowrap;

    overflow: hidden;

    transition:
        color 180ms ease,
        background 180ms ease,
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;

}


.taskbar-app:hover {

    color: #e2e8f0;

    background:
        rgba(148, 163, 184, .09);

    border-color:
        rgba(148, 163, 184, .12);

    transform:
        translateY(-1px);

}


.taskbar-app:active {

    transform:
        translateY(0) scale(.97);

}


/* =========================================================
   ACTIVE APPLICATION
   ========================================================= */

.taskbar-app.active {

    border-color:
        rgba(96, 165, 250, .25);

    background:
        rgba(30, 41, 59, .9);

    color: #f1f5f9;

    box-shadow:
        inset 0 -2px 0 #60a5fa,
        0 3px 10px rgba(0, 0, 0, .12);

}


.taskbar-app.active::after {

    content: '';

    position: absolute;

    right: 50%;
    bottom: -1px;

    width: 18px;
    height: 2px;

    border-radius: 999px;

    background: #60a5fa;

    opacity: .9;

    transform:
        translateX(50%) scaleX(0);

    transition:
        transform 220ms ease;

}


.taskbar-app.active:hover::after {

    transform:
        translateX(50%) scaleX(1);

}


/* =========================================================
   ICON
   ========================================================= */

.taskbar-app-icon {

    flex-shrink: 0;

    transition:
        transform 200ms cubic-bezier(.22, 1, .36, 1),
        color 180ms ease;

}


.taskbar-app:hover .taskbar-app-icon {

    transform:
        translateY(-1px) scale(1.08);

}


.taskbar-app.active .taskbar-app-icon {

    color: #93c5fd;

}


/* =========================================================
   TEXT
   ========================================================= */

.taskbar-app span {

    overflow: hidden;

    font-size: 11px;

    text-overflow: ellipsis;

    white-space: nowrap;

}


/* =========================================================
   APPLICATION ANIMATION
   ========================================================= */

.taskbar-app-enter-active {

    animation:
        app-enter 280ms cubic-bezier(.22, 1, .36, 1);

}


.taskbar-app-leave-active {

    animation:
        app-leave 180ms ease forwards;

}


@keyframes app-enter {

    from {

        opacity: 0;

        transform:
            translateY(7px) scale(.94);

    }

    to {

        opacity: 1;

        transform:
            translateY(0) scale(1);

    }

}


@keyframes app-leave {

    from {

        opacity: 1;

        transform:
            scale(1);

    }

    to {

        opacity: 0;

        transform:
            scale(.9);

    }

}


/* =========================================================
   SYSTEM
   ========================================================= */

.taskbar-system {

    display: flex;
    align-items: center;

    gap: 12px;

    margin-left: auto;

    padding-left: 8px;

    flex-shrink: 0;

}


/* =========================================================
   LANGUAGE
   ========================================================= */

.change-language {

    position: relative;

    height: 34px;

    min-width: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    padding: 0 8px;

    border: 1px solid transparent;
    border-radius: 7px;

    background: transparent;

    color: #94a3b8;

    cursor: pointer;

    overflow: hidden;

    transition:
        color 180ms ease,
        background 180ms ease,
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;

}


.change-language:hover {

    color: #bfdbfe;

    background:
        rgba(96, 165, 250, .09);

    border-color:
        rgba(96, 165, 250, .16);

    transform:
        translateY(-1px);

    box-shadow:
        0 4px 12px rgba(0, 0, 0, .15);

}


.change-language:active {

    transform:
        translateY(0) scale(.93);

}


.language-icon {

    flex-shrink: 0;

    transition:
        transform 260ms cubic-bezier(.22, 1, .36, 1);

}


.change-language:hover .language-icon {

    transform:
        rotate(-12deg) scale(1.08);

}


.language-label {

    min-width: 18px;

    font-family: monospace;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: .4px;

    text-align: center;

    user-select: none;

}


/* =========================================================
   LANGUAGE SWITCH
   ========================================================= */

.language-switch-enter-active,
.language-switch-leave-active {

    transition:
        opacity 150ms ease,
        transform 180ms cubic-bezier(.22, 1, .36, 1);

}


.language-switch-enter-from {

    opacity: 0;

    transform:
        translateY(5px) scale(.85);

}


.language-switch-leave-to {

    opacity: 0;

    transform:
        translateY(-5px) scale(.85);

}


/* =========================================================
   NETWORK
   ========================================================= */

.network-status {

    display: flex;
    align-items: center;

    gap: 5px;

    color: #86efac;

    font-family: monospace;

    font-size: 9px;

    letter-spacing: .3px;

    user-select: none;

}


.status-dot {

    width: 6px;
    height: 6px;

    flex-shrink: 0;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
        0 0 0 0 rgba(134, 239, 172, .45);

    animation:
        network-pulse 2.2s ease-out infinite;

}


@keyframes network-pulse {

    0% {

        box-shadow:
            0 0 0 0 rgba(134, 239, 172, .45);

    }

    70% {

        box-shadow:
            0 0 0 5px rgba(134, 239, 172, 0);

    }

    100% {

        box-shadow:
            0 0 0 0 rgba(134, 239, 172, 0);

    }

}


/* =========================================================
   CLOCK
   ========================================================= */

.taskbar-time {

    min-width: 42px;

    color: #cbd5e1;

    font-family: monospace;

    font-size: 11px;

    text-align: center;

    font-variant-numeric:
        tabular-nums;

    transition:
        color 200ms ease;

}


.taskbar-time:hover {

    color: #f8fafc;

}


/* =========================================================
   POWER
   ========================================================= */

.taskbar-power {

    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border: 1px solid transparent;
    border-radius: 7px;

    background: transparent;

    color: #94a3b8;

    cursor: pointer;

    transition:
        color 180ms ease,
        background 180ms ease,
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;

}


.taskbar-power:hover {

    color: #fca5a5;

    background:
        rgba(248, 113, 113, .08);

    border-color:
        rgba(248, 113, 113, .15);

    transform:
        translateY(-1px);

    box-shadow:
        0 4px 12px rgba(0, 0, 0, .15);

}


.taskbar-power:active {

    transform:
        scale(.92);

}


.taskbar-power svg {

    transition:
        transform 220ms ease;

}


.taskbar-power:hover svg {

    transform:
        rotate(8deg) scale(1.08);

}


/* =========================================================
   TASKBAR ENTER
   ========================================================= */

@keyframes taskbar-enter {

    from {

        opacity: 0;

        transform:
            translateY(10px);

    }

    to {

        opacity: 1;

        transform:
            translateY(0);

    }

}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 600px) {

    .taskbar {

        height: 50px;

        padding:
            0 5px;

    }


    .taskbar-apps {

        margin-left: 5px;

    }


    .taskbar-app {

        width: 36px;

        max-width: 36px;

        justify-content: center;

        padding: 0;

    }


    .taskbar-app span {

        display: none;

    }


    .taskbar-system {

        gap: 7px;

        padding-left: 5px;

    }


    .network-label {

        display: none;

    }


    .taskbar-time {

        min-width: 38px;

        font-size: 10px;

    }


    .change-language {

        min-width: 42px;

        padding: 0 6px;

    }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    .taskbar,
    .taskbar-app-enter-active,
    .taskbar-app-leave-active,
    .status-dot {

        animation: none;

    }


    .taskbar-start,
    .taskbar-app,
    .taskbar-power,
    .taskbar-app-icon,
    .taskbar-start svg,
    .taskbar-power svg,
    .language-icon,
    .language-switch-enter-active,
    .language-switch-leave-active {

        transition: none;

    }

}
</style>