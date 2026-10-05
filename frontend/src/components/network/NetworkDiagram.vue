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

        <!-- ========================================
             HEADER
        ========================================= -->

        <div class="network-header">

            <div class="network-header-content">

                <span class="section-label">
                    LEONARDO IT LAB
                </span>

                <h2>
                    Network Lab
                </h2>

                <p>
                    Simulación de infraestructura y
                    herramientas de diagnóstico de red.
                </p>

            </div>

            <div class="network-header-icon">
                <Wifi :size="28" />
            </div>

        </div>


        <!-- ========================================
             NETWORK STATUS
        ======================================== -->

        <NetworkStatus :status="status" :ip="ip" :gateway="gateway" :dns="dns" />


        <!-- ========================================
             NETWORK TOPOLOGY
        ======================================== -->

        <section class="network-topology">

            <div class="topology-header">

                <span class="section-label">
                    NETWORK TOPOLOGY
                </span>

                <h3>
                    Local Infrastructure
                </h3>

            </div>


            <div class="topology">

                <!-- INTERNET -->

                <div class="network-node internet" style="--node-delay: 0ms">
                    <div class="node-icon">
                        <Wifi :size="22" />
                    </div>

                    <strong>
                        Internet
                    </strong>

                    <span>
                        WAN
                    </span>
                </div>


                <!-- CONNECTION -->

                <div class="connection-line" style="--line-delay: 350ms">
                    <span class="data-packet"></span>
                </div>


                <!-- ROUTER -->

                <div class="network-node router-node" style="--node-delay: 150ms">
                    <div class="node-icon">
                        <Router :size="22" />
                    </div>

                    <strong>
                        Router
                    </strong>

                    <span>
                        192.168.1.1
                    </span>
                </div>


                <!-- CONNECTION -->

                <div class="connection-line" style="--line-delay: 500ms">
                    <span class="data-packet"></span>
                </div>


                <!-- SERVER -->

                <div class="network-node server" style="--node-delay: 300ms">
                    <div class="node-icon">
                        <Server :size="22" />
                    </div>

                    <strong>
                        Linux Server
                    </strong>

                    <span>
                        192.168.1.10
                    </span>
                </div>


                <!-- CONNECTION -->

                <div class="connection-line" style="--line-delay: 650ms">
                    <span class="data-packet"></span>
                </div>


                <!-- WORKSTATION -->

                <div class="network-node workstation" style="--node-delay: 450ms">
                    <div class="node-icon">
                        <Monitor :size="22" />
                    </div>

                    <strong>
                        Workstation
                    </strong>

                    <span>
                        192.168.1.100
                    </span>
                </div>


                <!-- CONNECTION -->

                <div class="connection-line" style="--line-delay: 800ms">
                    <span class="data-packet"></span>
                </div>


                <!-- DATABASE -->

                <div class="network-node database" style="--node-delay: 600ms">
                    <div class="node-icon">
                        <Database :size="22" />
                    </div>

                    <strong>
                        Database
                    </strong>

                    <span>
                        192.168.1.20
                    </span>
                </div>

            </div>

        </section>


        <!-- ========================================
             NETWORK TOOLS
        ========================================= -->

        <NetworkTools :loading="loading" @ping="runPing" @dns="runDns" @ports="runPortCheck" @scan="runNetworkScan" />


        <!-- ========================================
             DIAGNOSTIC RESULT
        ========================================= -->

        <Transition name="result">

            <section v-if="lastResult" class="network-result">

                <div class="result-header">

                    <span class="section-label">
                        DIAGNOSTIC RESULT
                    </span>

                    <span class="result-action">
                        {{ lastAction.toUpperCase() }}
                    </span>

                </div>


                <!-- ================================
                     PING
                ================================= -->

                <div v-if="lastAction === 'ping'" class="result-content">

                    <div class="result-row">
                        <span>Host</span>
                        <strong>
                            {{ lastResult.host }}
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>Packets Sent</span>
                        <strong>
                            {{ lastResult.packetsSent }}
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>Packets Received</span>
                        <strong>
                            {{ lastResult.packetsReceived }}
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>Packet Loss</span>
                        <strong>
                            {{ lastResult.packetLoss }}%
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>Latency</span>
                        <strong>
                            {{ lastResult.latency }}
                        </strong>
                    </div>

                </div>


                <!-- ================================
                     DNS
                ================================= -->

                <div v-else-if="lastAction === 'dns'" class="result-content">

                    <div class="result-row">
                        <span>Hostname</span>

                        <strong>
                            {{ lastResult.hostname }}
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>Address</span>

                        <strong>
                            {{ lastResult.address }}
                        </strong>
                    </div>

                    <div class="result-row">
                        <span>DNS Server</span>

                        <strong>
                            {{ lastResult.server }}
                        </strong>
                    </div>

                </div>


                <!-- ================================
                     PORTS
                ================================= -->

                <div v-else-if="lastAction === 'ports'" class="result-content">

                    <div class="result-row">
                        <span>Host</span>

                        <strong>
                            {{ lastResult.host }}
                        </strong>
                    </div>

                    <div v-for="port in lastResult.ports" :key="port.port" class="result-row">
                        <span>
                            {{ port.port }} /
                            {{ port.service }}
                        </span>

                        <strong>
                            {{ port.status.toUpperCase() }}
                        </strong>
                    </div>

                </div>


                <!-- ================================
                     NETWORK SCAN
                ================================= -->

                <div v-else-if="lastAction === 'scan'" class="result-content">

                    <div class="result-row">
                        <span>Network</span>

                        <strong>
                            {{ lastResult.network }}
                        </strong>
                    </div>

                    <div v-for="host in lastResult.hosts" :key="host.ip" class="result-row">
                        <span>
                            {{ host.ip }}
                        </span>

                        <strong>
                            {{ host.hostname }}
                            —
                            {{ host.status.toUpperCase() }}
                        </strong>
                    </div>

                </div>

            </section>

        </Transition>

    </div>
</template>


<style scoped>
/* ========================================
   MAIN
======================================== */

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

    scrollbar-width: thin;
    scrollbar-color: #334155 transparent;
}


/* ========================================
   HEADER
======================================== */

.network-header {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;

    margin-bottom: 18px;

    animation:
        headerEnter 0.6s ease both;
}

.network-header-content {
    animation:
        headerContentEnter 0.6s 0.1s ease both;
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


/* ========================================
   HEADER ICON
======================================== */

.network-header-icon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    flex-shrink: 0;

    border: 1px solid #263241;

    border-radius: 8px;

    background: #111821;

    color: #7dd3fc;

    animation:
        iconEnter 0.7s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.network-header-icon:hover {
    transform:
        translateY(-4px) rotate(-4deg);

    border-color: #38bdf8;

    box-shadow:
        0 0 20px rgba(56, 189, 248, 0.12);
}

.network-header-icon svg {
    animation:
        wifiPulse 2s ease-in-out infinite;
}


/* ========================================
   TOPOLOGY
======================================== */

.network-topology {
    margin: 18px 0;

    padding: 16px;

    border: 1px solid #263241;

    border-radius: 8px;

    background: #111821;

    animation:
        sectionEnter 0.6s 0.25s ease both;
}

.topology-header {
    margin-bottom: 20px;

    animation:
        titleEnter 0.5s 0.35s ease both;
}

.topology-header h3 {
    margin: 0;

    color: #e2e8f0;

    font-size: 16px;
}


/* ========================================
   TOPOLOGY CONTAINER
======================================== */

.topology {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 8px;

    min-width: max-content;

    padding: 20px 5px;

    overflow-x: auto;
}


/* ========================================
   NETWORK NODE
======================================== */

.network-node {
    position: relative;

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

    opacity: 0;

    transform:
        translateY(15px) scale(0.94);

    animation:
        nodeEnter 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;

    animation-delay:
        var(--node-delay);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}


/* ========================================
   NODE TOP GLOW
======================================== */

.network-node::before {
    content: '';

    position: absolute;

    top: 0;
    left: 15%;

    width: 70%;
    height: 1px;

    opacity: 0;

    background: currentColor;

    box-shadow:
        0 0 10px currentColor;

    transition:
        opacity 0.3s ease;
}

.network-node:hover::before {
    opacity: 1;
}


/* ========================================
   NODE HOVER
======================================== */

.network-node:hover {
    transform:
        translateY(-6px) scale(1.03);

    border-color: #475569;

    background: #111a24;

    box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.3),
        0 0 18px rgba(56, 189, 248, 0.05);
}


/* ========================================
   NODE ICON
======================================== */

.node-icon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border-radius: 7px;

    background: #17212d;

    color: #94a3b8;

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        color 0.3s ease,
        box-shadow 0.3s ease;
}

.network-node:hover .node-icon {
    transform:
        scale(1.08) rotate(-4deg);

    background: #1e293b;

    box-shadow:
        0 0 12px rgba(148, 163, 184, 0.12);
}


/* ========================================
   NODE TYPES
======================================== */

.network-node.internet {
    color: #7dd3fc;
}

.network-node.internet .node-icon {
    color: #7dd3fc;
}

.network-node.server {
    color: #a7f3d0;
}

.network-node.server .node-icon {
    color: #a7f3d0;
}

.network-node.database {
    color: #c4b5fd;
}

.network-node.database .node-icon {
    color: #c4b5fd;
}

.network-node.router-node {
    color: #fcd34d;
}

.network-node.router-node .node-icon {
    color: #fcd34d;
}

.network-node.workstation {
    color: #93c5fd;
}

.network-node.workstation .node-icon {
    color: #93c5fd;
}


/* ========================================
   NODE TEXT
======================================== */

.network-node strong {
    color: #e2e8f0;

    font-size: 11px;

    transition:
        color 0.25s ease;
}

.network-node:hover strong {
    color: #f8fafc;
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


/* ========================================
   CONNECTION
======================================== */

.connection-line {
    position: relative;

    width: 28px;
    height: 2px;

    flex-shrink: 0;

    overflow: hidden;

    background: #263241;

    transform-origin: left;

    animation:
        lineDraw 0.6s ease forwards;

    animation-delay:
        var(--line-delay);

    transform:
        scaleX(0);
}


/* ========================================
   DATA PACKET
======================================== */

.data-packet {
    position: absolute;

    top: 50%;
    left: -6px;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #7dd3fc;

    box-shadow:
        0 0 8px #7dd3fc;

    transform:
        translateY(-50%);

    opacity: 0;

    animation:
        packetMove 1.8s ease-in-out infinite;

    animation-delay:
        calc(var(--line-delay) + 1s);
}


/* ========================================
   RESULT
======================================== */

.network-result {
    margin-top: 18px;

    padding: 16px;

    border: 1px solid #263241;

    border-radius: 8px;

    background: #111821;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.15);
}


/* ========================================
   RESULT HEADER
======================================== */

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

    animation:
        actionPulse 2s ease-in-out infinite;
}


/* ========================================
   RESULT CONTENT
======================================== */

.result-content {
    display: flex;

    flex-direction: column;

    gap: 1px;
}


/* ========================================
   RESULT ROW
======================================== */

.result-row {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding: 8px 10px;

    border-radius: 4px;

    background: #0b1118;

    animation:
        resultRowEnter 0.4s ease both;

    transition:
        background 0.25s ease,
        transform 0.25s ease;
}

.result-row:hover {
    background: #111b26;

    transform:
        translateX(3px);
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


/* ========================================
   RESULT TRANSITION
======================================== */

.result-enter-active,
.result-leave-active {
    transition:
        opacity 0.35s ease,
        transform 0.35s ease;
}

.result-enter-from,
.result-leave-to {
    opacity: 0;

    transform:
        translateY(12px) scale(0.98);
}


/* ========================================
   ANIMATIONS
======================================== */

@keyframes headerEnter {
    from {
        opacity: 0;

        transform:
            translateY(-10px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}


@keyframes headerContentEnter {
    from {
        opacity: 0;

        transform:
            translateX(-15px);
    }

    to {
        opacity: 1;

        transform:
            translateX(0);
    }
}


@keyframes iconEnter {
    from {
        opacity: 0;

        transform:
            scale(0.7) rotate(10deg);
    }

    to {
        opacity: 1;

        transform:
            scale(1) rotate(0);
    }
}


@keyframes wifiPulse {

    0%,
    100% {
        opacity: 0.8;

        transform:
            scale(1);
    }

    50% {
        opacity: 1;

        transform:
            scale(1.08);
    }
}


@keyframes sectionEnter {
    from {
        opacity: 0;

        transform:
            translateY(12px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}


@keyframes titleEnter {
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


@keyframes nodeEnter {
    from {
        opacity: 0;

        transform:
            translateY(15px) scale(0.94);
    }

    to {
        opacity: 1;

        transform:
            translateY(0) scale(1);
    }
}


@keyframes lineDraw {
    from {
        transform:
            scaleX(0);

        opacity: 0;
    }

    to {
        transform:
            scaleX(1);

        opacity: 1;
    }
}


@keyframes packetMove {
    0% {
        left: -6px;

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        left: calc(100% + 6px);

        opacity: 0;
    }
}


@keyframes actionPulse {

    0%,
    100% {
        box-shadow:
            0 0 0 rgba(125, 211, 252, 0);
    }

    50% {
        box-shadow:
            0 0 10px rgba(125, 211, 252, 0.12);
    }
}


@keyframes resultRowEnter {
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


/* ========================================
   RESULT ROW STAGGER
======================================== */

.result-row:nth-child(1) {
    animation-delay: 50ms;
}

.result-row:nth-child(2) {
    animation-delay: 100ms;
}

.result-row:nth-child(3) {
    animation-delay: 150ms;
}

.result-row:nth-child(4) {
    animation-delay: 200ms;
}

.result-row:nth-child(5) {
    animation-delay: 250ms;
}

.result-row:nth-child(6) {
    animation-delay: 300ms;
}

.result-row:nth-child(7) {
    animation-delay: 350ms;
}


/* ========================================
   SCROLLBAR
======================================== */

.network-lab::-webkit-scrollbar {
    width: 6px;
}

.network-lab::-webkit-scrollbar-track {
    background: transparent;
}

.network-lab::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background: #334155;
}

.network-lab::-webkit-scrollbar-thumb:hover {
    background: #475569;
}


/* ========================================
   RESPONSIVE
======================================== */

@media (max-width: 800px) {

    .network-topology {
        overflow-x: auto;
    }

    .network-header {
        gap: 12px;
    }

    .network-header-icon {
        width: 42px;
        height: 42px;
    }
}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {

    .network-header,
    .network-header-content,
    .network-header-icon,
    .network-topology,
    .topology-header,
    .network-node,
    .connection-line,
    .command,
    .network-result,
    .result-row {
        animation: none;

        opacity: 1;

        transform: none;
    }

    .data-packet,
    .status-dot,
    .network-header-icon svg,
    .result-action {
        animation: none;
    }

    .network-node,
    .node-icon,
    .network-header-icon,
    .result-row {
        transition: none;
    }
}
</style>