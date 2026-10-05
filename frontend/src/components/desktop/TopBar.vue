<script setup>
import { Activity } from 'lucide-vue-next'
import { useClock } from '../../composables/useClock'

defineProps({
    apiStatus: {
        type: String,
        default: 'checking'
    }
})

const emit = defineEmits(['toggle-menu'])

const {
    currentTime,
    currentDate
} = useClock({
    hour12: false,
    showSeconds: false
})

const statusLabel = {
    checking: 'CHECKING',
    online: 'ONLINE',
    offline: 'OFFLINE'
}

const getStatusLabel = (status) => {
    return statusLabel[status] || 'UNKNOWN'
}
</script>

<template>
    <header class="topbar">

        <!-- BRAND -->
        <button class="brand" type="button" @click="emit('toggle-menu')" aria-label="Abrir menú principal">
            <span class="brand-icon">
                🐧
            </span>

            <span class="brand-info">
                <strong>Leonardo IT Lab</strong>
                <small>IT ENVIRONMENT</small>
            </span>
        </button>


        <!-- SYSTEM INFORMATION -->
        <div class="top-status">

            <!-- API -->
            <span class="status-item">
                <Activity :size="13" stroke-width="2" />

                <span class="status-label">
                    API
                </span>

                <span class="status-value" :class="`status-${apiStatus}`">
                    {{ getStatusLabel(apiStatus) }}
                </span>
            </span>


            <!-- SYSTEM -->
            <span class="status-item system-status" :class="`status-${apiStatus}`">
                <span class="status-indicator"></span>

                <span class="status-label">
                    SYSTEM
                </span>

                <span class="status-value">
                    {{ getStatusLabel(apiStatus) }}
                </span>
            </span>


            <!-- USER -->
            <span class="user-info">
                leonardo@it-lab
            </span>


            <!-- DATE -->
            <span class="date">
                {{ currentDate }}
            </span>


            <!-- CLOCK -->
            <span class="clock">
                {{ currentTime }}
            </span>

        </div>

    </header>
</template>

<style scoped>
/* =========================================================
   TOP BAR
========================================================= */

.topbar {
    position: absolute;
    inset: 0 0 auto 0;

    height: 42px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 14px;

    z-index: 1000;

    background:
        linear-gradient(180deg,
            rgba(15, 23, 42, 0.97),
            rgba(10, 15, 25, 0.94));

    border-bottom: 1px solid rgba(71, 85, 105, 0.45);

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.025),
        0 6px 18px rgba(0, 0, 0, 0.12);

    animation: topbar-enter 0.45s ease-out both;
}


/* =========================================================
   BRAND
========================================================= */

.brand {
    position: relative;

    display: flex;
    align-items: center;

    gap: 9px;

    min-width: 170px;

    padding: 5px 9px;

    border: 0;
    border-radius: 7px;

    background: transparent;

    color: #e2e8f0;

    cursor: pointer;

    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
}

.brand::after {
    content: "";

    position: absolute;

    left: 9px;
    right: 9px;
    bottom: 1px;

    height: 1px;

    background: linear-gradient(90deg,
            transparent,
            rgba(96, 165, 250, 0.7),
            transparent);

    opacity: 0;

    transform: scaleX(0.5);

    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}

.brand:hover {
    background: rgba(51, 65, 85, 0.38);

    transform: translateY(-1px);
}

.brand:hover::after {
    opacity: 1;
    transform: scaleX(1);
}

.brand:active {
    transform: translateY(0) scale(0.98);
}


/* =========================================================
   BRAND ICON
========================================================= */

.brand-icon {
    width: 27px;
    height: 27px;

    display: grid;
    place-items: center;

    flex-shrink: 0;

    font-size: 16px;

    border-radius: 6px;

    background: rgba(30, 41, 59, 0.75);

    border: 1px solid rgba(100, 116, 139, 0.25);

    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.04);

    transition:
        transform 0.25s ease,
        background-color 0.25s ease,
        box-shadow 0.25s ease;
}

.brand:hover .brand-icon {
    transform: translateY(-1px) rotate(-3deg);

    background: rgba(51, 65, 85, 0.85);

    box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.2);
}


/* =========================================================
   BRAND TEXT
========================================================= */

.brand-info {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    line-height: 1;
}

.brand-info strong {
    font-size: 12px;
    font-weight: 600;

    letter-spacing: 0.15px;

    color: #e2e8f0;
}

.brand-info small {
    margin-top: 3px;

    font-size: 7px;
    font-weight: 500;

    letter-spacing: 1px;

    color: #64748b;

    transition: color 0.2s ease;
}

.brand:hover .brand-info small {
    color: #94a3b8;
}


/* =========================================================
   TOP STATUS
========================================================= */

.top-status {
    display: flex;
    align-items: center;

    gap: 14px;

    color: #64748b;

    font-family:
        "JetBrains Mono",
        "Cascadia Code",
        Consolas,
        monospace;

    font-size: 10px;

    white-space: nowrap;
}


/* =========================================================
   STATUS ITEMS
========================================================= */

.status-item {
    display: inline-flex;
    align-items: center;

    gap: 5px;

    padding: 4px 7px;

    border-radius: 5px;

    transition:
        background-color 0.2s ease,
        color 0.2s ease;
}

.status-item:hover {
    background: rgba(51, 65, 85, 0.3);
}


/* =========================================================
   STATUS LABEL
========================================================= */

.status-label {
    color: #64748b;

    font-size: 9px;
    font-weight: 600;

    letter-spacing: 0.5px;
}


/* =========================================================
   STATUS VALUE
========================================================= */

.status-value {
    font-size: 9px;
    font-weight: 600;

    letter-spacing: 0.4px;

    transition:
        color 0.25s ease,
        text-shadow 0.25s ease;
}


/* =========================================================
   STATUS COLORS
========================================================= */

.status-online {
    color: #86efac;
}

.status-offline {
    color: #fca5a5;
}

.status-checking {
    color: #fde68a;
}


/* =========================================================
   STATUS INDICATOR
========================================================= */

.status-indicator {
    width: 6px;
    height: 6px;

    flex-shrink: 0;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
        0 0 0 0 currentColor;

    animation: status-pulse 2.2s ease-out infinite;
}


/* =========================================================
   SYSTEM STATUS
========================================================= */

.system-status {
    gap: 6px;
}


/* =========================================================
   USER
========================================================= */

.user-info {
    padding-left: 5px;

    color: #64748b;

    transition:
        color 0.2s ease;
}

.user-info:hover {
    color: #94a3b8;
}


/* =========================================================
   DATE
========================================================= */

.date {
    color: #64748b;

    padding-left: 4px;

    transition: color 0.2s ease;
}

.date:hover {
    color: #94a3b8;
}


/* =========================================================
   CLOCK
========================================================= */

.clock {
    min-width: 42px;

    color: #cbd5e1;

    text-align: right;

    font-weight: 600;

    letter-spacing: 0.4px;

    transition:
        color 0.2s ease,
        text-shadow 0.2s ease;
}

.clock:hover {
    color: #f1f5f9;

    text-shadow:
        0 0 10px rgba(148, 163, 184, 0.25);
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes topbar-enter {
    from {
        opacity: 0;
        transform: translateY(-6px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


@keyframes status-pulse {
    0% {
        box-shadow:
            0 0 0 0 currentColor;
        opacity: 1;
    }

    45% {
        box-shadow:
            0 0 0 4px transparent;
        opacity: 0.85;
    }

    100% {
        box-shadow:
            0 0 0 4px transparent;
        opacity: 1;
    }
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .topbar,
    .brand,
    .brand-icon,
    .brand::after,
    .status-indicator {
        animation: none;
        transition: none;
    }
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 850px) {

    .top-status {
        gap: 7px;
    }

    .user-info {
        display: none;
    }

    .date {
        display: none;
    }

}


@media (max-width: 600px) {

    .topbar {
        padding: 0 8px;
    }

    .brand {
        min-width: auto;
    }

    .brand-info small {
        display: none;
    }

    .top-status {
        gap: 3px;
    }

    .status-item {
        padding: 4px;
    }

    .status-label {
        display: none;
    }

    .clock {
        min-width: 38px;
    }

}
</style>
