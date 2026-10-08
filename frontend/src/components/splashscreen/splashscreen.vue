<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['loaded'])

const progress = ref(0)
const loadingText = ref('Initializing system...')

onMounted(() => {
    const steps = [
        { progress: 20, text: 'Loading interface...' },
        { progress: 40, text: 'Loading components...' },
        { progress: 60, text: 'Initializing applications...' },
        { progress: 80, text: 'Loading portfolio...' },
        { progress: 100, text: 'System ready.' }
    ]

    let index = 0

    const interval = setInterval(() => {

        const step = steps[index]

        progress.value = step.progress
        loadingText.value = step.text

        index++

        if (index >= steps.length) {
            clearInterval(interval)

            setTimeout(() => {
                emit('loaded')
            }, 400)
        }

    }, 350)
})
</script>

<template>
    <div class="splash-screen">

        <div class="splash-content">

            <div class="logo">
                &lt;/&gt;
            </div>

            <h1>Leonardo IT Lab</h1>

            <p>Developer Portfolio</p>

            <div class="loading-container">

                <div class="loading-bar">
                    <div class="loading-progress" :style="{ width: `${progress}%` }"></div>
                </div>

                <div class="loading-info">
                    <span>{{ loadingText }}</span>
                    <span>{{ progress }}%</span>
                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>
.splash-screen {
    position: fixed;
    inset: 0;
    z-index: 99999;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #0b0f14;
    color: white;
}

.splash-content {
    width: 420px;
    max-width: 85%;
    text-align: center;
}

.logo {
    width: 80px;
    height: 80px;

    margin: 0 auto 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(255, 255, 255, .15);
    border-radius: 18px;

    font-size: 28px;
    font-weight: bold;

    animation: pulse 2s infinite;
}

h1 {
    margin: 0;
    font-size: 28px;
}

p {
    color: #8b949e;
}

.loading-container {
    margin-top: 40px;
}

.loading-bar {
    height: 4px;
    overflow: hidden;

    background: rgba(255, 255, 255, .1);
    border-radius: 10px;
}

.loading-progress {
    height: 100%;

    background: white;

    transition: width .35s ease;
}

.loading-info {
    display: flex;
    justify-content: space-between;

    margin-top: 10px;

    color: #6e7681;
    font-size: 12px;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

}
</style>