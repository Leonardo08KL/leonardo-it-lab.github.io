<script setup>
defineProps({
    status: {
        type: String,
        default: 'online'
    },
    ip: {
        type: String,
        default: '192.168.1.100'
    },
    gateway: {
        type: String,
        default: '192.168.1.1'
    },
    dns: {
        type: String,
        default: '8.8.8.8'
    }
})

const statusLabels = {
    online: 'ONLINE',
    offline: 'OFFLINE',
    warning: 'WARNING'
}
</script>

<template>
    <section class="network-status">
        <div class="status-header">
            <div>
                <span class="section-label">
                    NETWORK STATUS
                </span>

                <h3>Network Connection</h3>
            </div>

            <span class="status-badge" :class="`status-${status}`">
                <span class="status-dot"></span>

                {{ statusLabels[status] || status.toUpperCase() }}
            </span>
        </div>

        <div class="network-information">
            <div class="network-item">
                <span class="label">IP Address</span>
                <strong>{{ ip }}</strong>
            </div>

            <div class="network-item">
                <span class="label">Gateway</span>
                <strong>{{ gateway }}</strong>
            </div>

            <div class="network-item">
                <span class="label">DNS</span>
                <strong>{{ dns }}</strong>
            </div>
        </div>
    </section>
</template>

<style scoped>
.network-status {
    padding: 16px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111821;
}

.status-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;
}

.section-label {
    display: block;

    margin-bottom: 4px;

    color: #64748b;

    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
}

.status-header h3 {
    margin: 0;

    color: #e2e8f0;

    font-size: 16px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    padding: 5px 9px;

    border-radius: 999px;

    font-size: 11px;
    font-weight: 700;
}

.status-online {
    color: #86efac;
    background: rgba(34, 197, 94, 0.12);
}

.status-offline {
    color: #fca5a5;
    background: rgba(239, 68, 68, 0.12);
}

.status-warning {
    color: #fde68a;
    background: rgba(234, 179, 8, 0.12);
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: currentColor;
}

.network-information {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 10px;

    margin-top: 16px;
}

.network-item {
    display: flex;
    flex-direction: column;

    gap: 4px;

    padding: 10px;

    border-radius: 6px;

    background: #0b1118;
}

.network-item .label {
    color: #64748b;
    font-size: 11px;
}

.network-item strong {
    color: #cbd5e1;

    font-family:
        'Cascadia Code',
        'Fira Code',
        Consolas,
        monospace;

    font-size: 12px;
}

@media (max-width: 600px) {
    .network-information {
        grid-template-columns: 1fr;
    }
}
</style>