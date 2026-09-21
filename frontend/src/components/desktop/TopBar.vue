<style>
.topbar {
    height: 42px;
    background: rgba(10, 14, 20, .88);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    border-bottom: 1px solid #29313d;
    position: relative;
    z-index: 1000
}

.brand {
    background: transparent;
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer
}

.brand-mark {
    font-size: 18px
}

.top-status {
    display: flex;
    gap: 18px;
    color: #9ba8b7;
    font-size: 12px
}

.top-status span {
    display: flex;
    align-items: center;
    gap: 5px
}

.system-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.status-online {
    color: #86efac;
}

.status-offline {
    color: #fca5a5;
}

.status-checking {
    color: #fde68a;
}
</style>

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

        <button class="brand" type="button" @click="emit('toggle-menu')">
            <span class="brand-mark">🐧</span>
            <strong>Leonardo IT Lab</strong>
        </button>

        <div class="top-status">

            <span>
                <Activity :size="14" />
                API {{ getStatusLabel(apiStatus) }}
            </span>

            <span class="system-status" :class="`status-${apiStatus}`">
                <Activity :size="14" />
                SYSTEM {{ getStatusLabel(apiStatus) }}
            </span>

            <span>
                leonardo@it-lab
            </span>

            <span class="date">
                {{ currentDate }}
            </span>

            <span class="clock">
                {{ currentTime }}
            </span>

        </div>
    </header>
</template>