<script setup>
import {
    Router,
    Server,
    Monitor,
    Database,
    Wifi
} from 'lucide-vue-next'

import NetworkStatus from './NetworkStatus.vue'
import NetworkTools from './NetworkTools.vue'

import { useNetwork } from '../../composables/useNetwork'

const {
    status,
    ip,
    gateway,
    dns,

    loading,
    lastAction,
    lastResult,

    ping,
    dnsLookup,
    checkPorts,
    scanNetwork
} = useNetwork()

const runPing = () => {
    ping()
}

const runDns = () => {
    dnsLookup()
}

const runPortCheck = () => {
    checkPorts()
}

const runNetworkScan = () => {
    scanNetwork()
}
</script>

<template>
    <div class="network-lab">
        <div class="network-header">
            <div>
                <span class="section-label">
                    LEONARDO IT LAB
                </span>

                <h2>Network Lab</h2>

                <p>
                    Simulación de infraestructura y
                    herramientas de diagnóstico de red.
                </p>
            </div>

            <div class="network-header-icon">
                <Wifi :size="28" />
            </div>
        </div>

        <NetworkStatus :status="status" :ip="ip" :gateway="gateway" :dns="dns" />
        <section class="network-topology">
            <div class="topology-header">
                <span class="section-label">
                    NETWORK TOPOLOGY
                </span>

                <h3>Local Infrastructure</h3>
            </div>

            <div class="topology">
                <!-- Internet -->
                <div class="network-node internet">
                    <div class="node-icon">
                        <Wifi :size="22" />
                    </div>

                    <strong>Internet</strong>

                    <span>WAN</span>
                </div>

                <div class="connection-line"></div>

                <!-- Router -->
                <div class="network-node">
                    <div class="node-icon">
                        <Router :size="22" />
                    </div>

                    <strong>Router</strong>

                    <span>192.168.1.1</span>
                </div>

                <div class="connection-line"></div>

                <!-- Server -->
                <div class="network-node server">
                    <div class="node-icon">
                        <Server :size="22" />
                    </div>

                    <strong>Linux Server</strong>

                    <span>192.168.1.10</span>
                </div>

                <div class="connection-line"></div>

                <!-- Workstation -->
                <div class="network-node">
                    <div class="node-icon">
                        <Monitor :size="22" />
                    </div>

                    <strong>Workstation</strong>

                    <span>192.168.1.100</span>
                </div>

                <div class="connection-line"></div>

                <!-- Database -->
                <div class="network-node database">
                    <div class="node-icon">
                        <Database :size="22" />
                    </div>

                    <strong>Database</strong>

                    <span>192.168.1.20</span>
                </div>
            </div>
        </section>

        <NetworkTools :loading="loading" @ping="runPing" @dns="runDns" @ports="runPortCheck" @scan="runNetworkScan" />
        <section v-if="lastResult" class="network-result">
            <div class="result-header">
                <span class="section-label">
                    DIAGNOSTIC RESULT
                </span>

                <span class="result-action">
                    {{ lastAction.toUpperCase() }}
                </span>
            </div>

            <!-- Ping -->
            <div v-if="lastAction === 'ping'" class="result-content">
                <div class="result-row">
                    <span>Host</span>
                    <strong>{{ lastResult.host }}</strong>
                </div>

                <div class="result-row">
                    <span>Packets Sent</span>
                    <strong>{{ lastResult.packetsSent }}</strong>
                </div>

                <div class="result-row">
                    <span>Packets Received</span>
                    <strong>{{ lastResult.packetsReceived }}</strong>
                </div>

                <div class="result-row">
                    <span>Packet Loss</span>
                    <strong>{{ lastResult.packetLoss }}%</strong>
                </div>

                <div class="result-row">
                    <span>Latency</span>
                    <strong>{{ lastResult.latency }}</strong>
                </div>
            </div>

            <!-- DNS -->
            <div v-else-if="lastAction === 'dns'" class="result-content">
                <div class="result-row">
                    <span>Hostname</span>
                    <strong>{{ lastResult.hostname }}</strong>
                </div>

                <div class="result-row">
                    <span>Address</span>
                    <strong>{{ lastResult.address }}</strong>
                </div>

                <div class="result-row">
                    <span>DNS Server</span>
                    <strong>{{ lastResult.server }}</strong>
                </div>
            </div>

            <!-- Ports -->
            <div v-else-if="lastAction === 'ports'" class="result-content">
                <div class="result-row">
                    <span>Host</span>
                    <strong>{{ lastResult.host }}</strong>
                </div>

                <div v-for="port in lastResult.ports" :key="port.port" class="result-row">
                    <span>
                        {{ port.port }} / {{ port.service }}
                    </span>

                    <strong>
                        {{ port.status.toUpperCase() }}
                    </strong>
                </div>
            </div>

            <!-- Network Scan -->
            <div v-else-if="lastAction === 'scan'" class="result-content">
                <div class="result-row">
                    <span>Network</span>
                    <strong>{{ lastResult.network }}</strong>
                </div>

                <div v-for="host in lastResult.hosts" :key="host.ip" class="result-row">
                    <span>
                        {{ host.ip }}
                    </span>

                    <strong>
                        {{ host.hostname }}
                        — {{ host.status.toUpperCase() }}
                    </strong>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.network-lab {
    width: 100%;
    height: 100%;

    padding: 18px;

    box-sizing: border-box;

    overflow-y: auto;

    background: #0b1118;
    color: #cbd5e1;

    font-family:
        Inter,
        system-ui,
        sans-serif;
}

.network-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;

    margin-bottom: 18px;
}

.section-label {
    display: block;

    margin-bottom: 5px;

    color: #64748b;

    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
}

.network-header h2 {
    margin: 0 0 5px;

    color: #f1f5f9;

    font-size: 22px;
}

.network-header p {
    margin: 0;

    color: #64748b;

    font-size: 12px;
}

.network-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111821;

    color: #7dd3fc;
}

.network-topology {
    margin: 18px 0;

    padding: 16px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111821;
}

.topology-header {
    margin-bottom: 20px;
}

.topology-header h3 {
    margin: 0;

    color: #e2e8f0;

    font-size: 16px;
}

.topology {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    min-width: max-content;

    padding: 20px 5px;

    overflow-x: auto;
}

.network-node {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5px;

    width: 105px;

    padding: 12px 8px;

    border: 1px solid #334155;
    border-radius: 8px;

    background: #0b1118;

    text-align: center;
}

.network-node strong {
    color: #e2e8f0;

    font-size: 11px;
}

.network-node span {
    color: #64748b;

    font-size: 9px;

    font-family:
        'Cascadia Code',
        'Fira Code',
        Consolas,
        monospace;
}

.node-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border-radius: 7px;

    background: #17212d;

    color: #94a3b8;
}

.network-node.internet .node-icon {
    color: #7dd3fc;
}

.network-node.server .node-icon {
    color: #a7f3d0;
}

.network-node.database .node-icon {
    color: #c4b5fd;
}

.connection-line {
    width: 28px;
    height: 1px;

    flex-shrink: 0;

    background: #475569;
}

@media (max-width: 800px) {
    .network-topology {
        overflow-x: auto;
    }
}

.network-result {
    margin-top: 18px;

    padding: 16px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111821;
}

.result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
}

.result-action {
    padding: 4px 8px;

    border-radius: 5px;

    background: #17212d;

    color: #7dd3fc;

    font-family:
        'Cascadia Code',
        'Fira Code',
        Consolas,
        monospace;

    font-size: 10px;
    font-weight: 700;
}

.result-content {
    display: flex;
    flex-direction: column;

    gap: 1px;
}

.result-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding: 8px 10px;

    border-radius: 4px;

    background: #0b1118;
}

.result-row span {
    color: #64748b;

    font-size: 11px;
}

.result-row strong {
    color: #cbd5e1;

    font-family:
        'Cascadia Code',
        'Fira Code',
        Consolas,
        monospace;

    font-size: 11px;
}
</style>