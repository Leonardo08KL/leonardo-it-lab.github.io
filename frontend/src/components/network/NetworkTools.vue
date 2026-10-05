<script setup>
import {
    Activity,
    Globe,
    Server,
    Wifi
} from 'lucide-vue-next'

const emit = defineEmits([
    'ping',
    'dns',
    'ports',
    'scan'
]);

import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n();

const tools = [
    {
        id: 'ping',
        title: 'network-lab.tools.tools-list.ping.title',
        description: 'network-lab.tools.tools-list.ping.description',
        icon: Activity
    },
    {
        id: 'dns',
        title: 'network-lab.tools.tools-list.dns.title',
        description: 'network-lab.tools.tools-list.dns.description',
        icon: Globe
    },
    {
        id: 'ports',
        title: 'network-lab.tools.tools-list.ports.title',
        description: 'network-lab.tools.tools-list.ports.description',
        icon: Server
    },
    {
        id: 'scan',
        title: 'network-lab.tools.tools-list.scan.title',
        description: 'network-lab.tools.tools-list.scan.description',
        icon: Wifi
    }
]

const runTool = (tool) => {
    emit(tool)
}

defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});

const changeLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
    <section class="network-tools">
        <div class="tools-header">
            <span class="section-label">
                {{ t('network-lab.tools.title') }}
            </span>

            <h3>{{ t('network-lab.tools.description') }}</h3>
        </div>

        <div class="tools-grid">
            <button v-for="tool in tools" :key="tool.id" type="button" class="tool-card" :disabled="loading"
                @click="runTool(tool.id)">
                <div class="tool-icon">
                    <component :is="tool.icon" :size="20" />
                </div>

                <div class="tool-information">
                    <strong>{{ t(tool.title) }}</strong>
                    <span>{{ t(tool.description) }}</span>
                </div>
            </button>
        </div>
    </section>
</template>

<style scoped>
.network-tools {
    padding: 16px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111821;
}

.tools-header {
    margin-bottom: 14px;
}

.section-label {
    display: block;

    margin-bottom: 4px;

    color: #64748b;

    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
}

.tools-header h3 {
    margin: 0;

    color: #e2e8f0;

    font-size: 16px;
}

.tools-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 10px;
}

.tool-card {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 12px;

    border: 1px solid #263241;
    border-radius: 7px;

    background: #0b1118;
    color: #cbd5e1;

    text-align: left;

    cursor: pointer;

    transition:
        border-color 0.15s ease,
        background 0.15s ease,
        transform 0.15s ease;
}

.tool-card:hover {
    border-color: #475569;

    background: #151e29;

    transform: translateY(-1px);
}

.tool-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    flex-shrink: 0;

    border-radius: 6px;

    background: #17212d;

    color: #7dd3fc;
}

.tool-information {
    display: flex;
    flex-direction: column;

    gap: 3px;
}

.tool-information strong {
    color: #e2e8f0;

    font-size: 13px;
}

.tool-information span {
    color: #64748b;

    font-size: 11px;
}

@media (max-width: 600px) {
    .tools-grid {
        grid-template-columns: 1fr;
    }
}

.tool-card:disabled {
    opacity: 0.5;
    cursor: wait;
}
</style>