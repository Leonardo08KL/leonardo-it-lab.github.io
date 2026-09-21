<script setup>
import {
    Cpu,
    HardDrive,
    MemoryStick,
    Monitor,
    Wrench,
    Thermometer
} from 'lucide-vue-next'

const components = [
    {
        name: 'Processor',
        value: 'CPU',
        icon: Cpu,
        status: 'Detected'
    },
    {
        name: 'Memory',
        value: 'RAM',
        icon: MemoryStick,
        status: 'Detected'
    },
    {
        name: 'Storage',
        value: 'SSD / HDD',
        icon: HardDrive,
        status: 'Detected'
    },
    {
        name: 'Display',
        value: 'Monitor',
        icon: Monitor,
        status: 'Detected'
    }
]

const supportAreas = [
    'Preventive maintenance',
    'Hardware diagnostics',
    'Component replacement',
    'Operating system installation',
    'Driver installation',
    'Performance troubleshooting'
]
</script>

<template>
    <section class="hardware-view">
        <header class="hardware-header">
            <div class="header-icon">
                <Wrench :size="24" />
            </div>

            <div>
                <h2>Hardware Lab</h2>
                <p>
                    Diagnóstico, mantenimiento y soporte de equipos.
                </p>
            </div>
        </header>

        <section class="hardware-section">
            <h3>System Components</h3>

            <div class="components-grid">
                <article v-for="component in components" :key="component.name" class="component-card">
                    <div class="component-icon">
                        <component :is="component.icon" :size="20" />
                    </div>

                    <div>
                        <strong>{{ component.name }}</strong>
                        <span>{{ component.value }}</span>
                    </div>

                    <small>
                        {{ component.status }}
                    </small>
                </article>
            </div>
        </section>

        <section class="hardware-section">
            <h3>Support Areas</h3>

            <div class="support-list">
                <div v-for="area in supportAreas" :key="area" class="support-item">
                    <span class="check">✓</span>
                    <span>{{ area }}</span>
                </div>
            </div>
        </section>

        <div class="hardware-note">
            <Thermometer :size="18" />

            <span>
                Hardware diagnostics should combine physical inspection,
                software diagnostics and system monitoring.
            </span>
        </div>
    </section>
</template>

<style scoped>
.hardware-view {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;
}

.hardware-header {
    display: flex;
    align-items: center;
    gap: 13px;

    margin-bottom: 22px;
}

.header-icon {
    width: 46px;
    height: 46px;

    display: grid;
    place-items: center;

    border-radius: 9px;

    background: #1e293b;
    color: #93c5fd;
}

.hardware-header h2 {
    margin: 0 0 4px;

    color: #f8fafc;
    font-size: 21px;
}

.hardware-header p {
    margin: 0;

    color: #94a3b8;
    font-size: 12px;
}

.hardware-section {
    margin-bottom: 20px;
}

.hardware-section h3 {
    margin: 0 0 12px;

    color: #cbd5e1;
    font-size: 13px;
}

.components-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

    gap: 10px;
}

.component-card {
    display: grid;

    grid-template-columns: auto 1fr auto;

    align-items: center;

    gap: 10px;

    padding: 13px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111827;
}

.component-icon {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 7px;

    background: #1e293b;
    color: #93c5fd;
}

.component-card strong,
.component-card span {
    display: block;
}

.component-card strong {
    color: #f8fafc;
    font-size: 12px;
}

.component-card span {
    margin-top: 3px;

    color: #64748b;
    font-size: 10px;
}

.component-card small {
    color: #86efac;
    font-size: 9px;
}

.support-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.support-item {
    display: flex;
    align-items: center;
    gap: 9px;

    padding: 11px;

    border: 1px solid #263241;
    border-radius: 7px;

    background: #111827;

    color: #cbd5e1;
    font-size: 11px;
}

.check {
    color: #86efac;
}

.hardware-note {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    padding: 13px;

    border: 1px solid #334155;
    border-radius: 8px;

    color: #94a3b8;
    background: #111827;

    font-size: 11px;
    line-height: 1.5;
}

@media (max-width: 600px) {
    .support-list {
        grid-template-columns: 1fr;
    }
}
</style>