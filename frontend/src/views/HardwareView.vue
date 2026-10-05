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

        <!-- HEADER -->
        <header class="hardware-header">

            <div class="header-icon">
                <Wrench :size="24" />
            </div>

            <div class="header-content">
                <span class="header-label">
                    LEONARDO IT LAB
                </span>

                <h2>Hardware Lab</h2>

                <p>
                    Diagnóstico, mantenimiento y soporte de equipos.
                </p>
            </div>

        </header>


        <!-- COMPONENTS -->
        <section class="hardware-section components-section">

            <div class="section-heading">
                <span class="section-line"></span>
                <h3>System Components</h3>
            </div>

            <div class="components-grid">

                <article v-for="(component, index) in components" :key="component.name" class="component-card" :style="{
                    '--delay': `${index * 100}ms`
                }">

                    <div class="component-icon">
                        <component :is="component.icon" :size="20" />
                    </div>

                    <div class="component-info">
                        <strong>
                            {{ component.name }}
                        </strong>

                        <span>
                            {{ component.value }}
                        </span>
                    </div>

                    <small class="component-status">
                        <span class="status-dot"></span>
                        {{ component.status }}
                    </small>

                    <div class="scan-line"></div>

                </article>

            </div>
        </section>


        <!-- SUPPORT AREAS -->
        <section class="hardware-section support-section">

            <div class="section-heading">
                <span class="section-line"></span>
                <h3>Support Areas</h3>
            </div>

            <div class="support-list">

                <div v-for="(area, index) in supportAreas" :key="area" class="support-item" :style="{
                    '--delay': `${index * 70}ms`
                }">

                    <span class="check">
                        ✓
                    </span>

                    <span>
                        {{ area }}
                    </span>

                </div>

            </div>

        </section>


        <!-- NOTE -->
        <div class="hardware-note">

            <div class="note-icon">
                <Thermometer :size="18" />
            </div>

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

    background:
        radial-gradient(circle at 90% 0%,
            rgba(59, 130, 246, 0.07),
            transparent 35%),
        #0f172a;

    color: #e2e8f0;

    box-sizing: border-box;
}


/* =========================================================
   HEADER
========================================================= */

.hardware-header {
    display: flex;
    align-items: center;
    gap: 13px;

    margin-bottom: 22px;

    animation: headerEnter 0.55s ease both;
}

.header-icon {
    position: relative;

    width: 46px;
    height: 46px;

    display: grid;
    place-items: center;

    border: 1px solid #334155;
    border-radius: 9px;

    background: #1e293b;
    color: #93c5fd;

    animation:
        iconEnter 0.65s cubic-bezier(.2, .8, .2, 1) both,
        iconFloat 4s ease-in-out 0.7s infinite;

    overflow: hidden;
}

.header-icon::before {
    content: '';

    position: absolute;
    inset: -30%;

    background: linear-gradient(120deg,
            transparent 35%,
            rgba(147, 197, 253, 0.18),
            transparent 65%);

    transform: translateX(-100%);

    animation: iconScan 3.5s ease-in-out 1s infinite;
}

.header-icon svg {
    position: relative;
    z-index: 1;

    transition:
        transform 0.3s ease,
        filter 0.3s ease;
}

.hardware-header:hover .header-icon svg {
    transform: rotate(-12deg) scale(1.08);

    filter:
        drop-shadow(0 0 7px rgba(147, 197, 253, 0.65));
}

.header-content {
    animation: contentEnter 0.6s ease 0.1s both;
}

.header-label {
    display: block;

    margin-bottom: 3px;

    color: #64748b;

    font-size: 9px;
    font-weight: 700;

    letter-spacing: 0.14em;
}

.hardware-header h2 {
    margin: 0 0 4px;

    color: #f8fafc;

    font-size: 21px;

    letter-spacing: -0.02em;
}

.hardware-header p {
    margin: 0;

    color: #94a3b8;

    font-size: 12px;
}


/* =========================================================
   SECTIONS
========================================================= */

.hardware-section {
    margin-bottom: 20px;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 12px;

    animation: sectionHeadingEnter 0.5s ease both;
}

.section-line {
    width: 3px;
    height: 14px;

    border-radius: 2px;

    background: #60a5fa;

    box-shadow:
        0 0 8px rgba(96, 165, 250, 0.4);
}

.hardware-section h3 {
    margin: 0;

    color: #cbd5e1;

    font-size: 13px;
}


/* =========================================================
   COMPONENTS
========================================================= */

.components-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

    gap: 10px;
}

.component-card {
    position: relative;

    display: grid;

    grid-template-columns: auto 1fr auto;

    align-items: center;

    gap: 10px;

    padding: 13px;

    border: 1px solid #263241;
    border-radius: 8px;

    background:
        linear-gradient(135deg,
            rgba(30, 41, 59, 0.75),
            rgba(17, 24, 39, 0.95));

    overflow: hidden;

    opacity: 0;
    transform:
        translateY(15px) scale(0.97);

    animation:
        componentEnter 0.55s cubic-bezier(.2, .8, .2, 1) var(--delay) forwards;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
}

.component-card::before {
    content: '';

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(90deg,
            transparent,
            rgba(96, 165, 250, 0.65),
            transparent);

    transform: translateX(-100%);
}

.component-card:hover::before {
    animation: cardScan 1s ease;
}

.component-card:hover {
    transform:
        translateY(-3px) scale(1.015);

    border-color: #3b82f6;

    background:
        linear-gradient(135deg,
            rgba(30, 58, 95, 0.8),
            rgba(17, 24, 39, 0.98));

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.25),
        0 0 18px rgba(59, 130, 246, 0.08);
}


/* =========================================================
   COMPONENT ICON
========================================================= */

.component-icon {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border: 1px solid #334155;
    border-radius: 7px;

    background: #1e293b;
    color: #93c5fd;

    transition:
        transform 0.3s ease,
        color 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}

.component-card:hover .component-icon {
    transform:
        rotate(-5deg) scale(1.08);

    color: #bfdbfe;

    background: #263a55;

    box-shadow:
        0 0 14px rgba(96, 165, 250, 0.18);
}


/* =========================================================
   COMPONENT INFO
========================================================= */

.component-info {
    min-width: 0;
}

.component-card strong,
.component-card span {
    display: block;
}

.component-card strong {
    color: #f8fafc;

    font-size: 12px;

    transition: color 0.25s ease;
}

.component-card:hover strong {
    color: #dbeafe;
}

.component-card span {
    margin-top: 3px;

    color: #64748b;

    font-size: 10px;

    font-family:
        'Cascadia Code',
        'Fira Code',
        Consolas,
        monospace;
}


/* =========================================================
   STATUS
========================================================= */

.component-status {
    display: flex;
    align-items: center;
    gap: 5px;

    color: #86efac;

    font-size: 9px;

    white-space: nowrap;
}

.status-dot {
    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #86efac;

    box-shadow:
        0 0 0 0 rgba(134, 239, 172, 0.5);

    animation: statusPulse 2s infinite;
}


/* =========================================================
   CARD SCAN
========================================================= */

.scan-line {
    position: absolute;

    left: 0;
    bottom: 0;

    width: 0;
    height: 1px;

    background: #60a5fa;

    box-shadow:
        0 0 8px rgba(96, 165, 250, 0.6);

    transition: width 0.4s ease;
}

.component-card:hover .scan-line {
    width: 100%;
}


/* =========================================================
   SUPPORT AREAS
========================================================= */

.support-list {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 8px;
}

.support-item {
    position: relative;

    display: flex;
    align-items: center;

    gap: 9px;

    padding: 11px;

    border: 1px solid #263241;
    border-radius: 7px;

    background: #111827;

    color: #cbd5e1;

    font-size: 11px;

    opacity: 0;
    transform: translateX(-12px);

    animation:
        supportEnter 0.45s ease var(--delay) forwards;

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background 0.25s ease,
        color 0.25s ease;
}

.support-item::after {
    content: '';

    position: absolute;

    left: 0;
    top: 0;

    width: 2px;
    height: 0;

    border-radius: 2px;

    background: #60a5fa;

    transition: height 0.3s ease;
}

.support-item:hover {
    transform: translateX(4px);

    border-color: #334155;

    background: #172235;

    color: #e2e8f0;
}

.support-item:hover::after {
    height: 100%;
}


/* =========================================================
   CHECK
========================================================= */

.check {
    display: grid;
    place-items: center;

    width: 17px;
    height: 17px;

    flex-shrink: 0;

    border: 1px solid rgba(134, 239, 172, 0.2);
    border-radius: 50%;

    background: rgba(134, 239, 172, 0.08);

    color: #86efac;

    font-size: 10px;

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
}

.support-item:hover .check {
    transform: scale(1.12);

    background: rgba(134, 239, 172, 0.15);

    box-shadow:
        0 0 10px rgba(134, 239, 172, 0.15);
}


/* =========================================================
   NOTE
========================================================= */

.hardware-note {
    position: relative;

    display: flex;
    align-items: flex-start;

    gap: 10px;

    padding: 13px;

    border: 1px solid #334155;
    border-radius: 8px;

    color: #94a3b8;

    background:
        linear-gradient(135deg,
            rgba(30, 41, 59, 0.75),
            rgba(17, 24, 39, 0.95));

    font-size: 11px;
    line-height: 1.5;

    overflow: hidden;

    animation:
        noteEnter 0.6s ease 0.75s both;
}

.hardware-note::before {
    content: '';

    position: absolute;

    inset: 0;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(96, 165, 250, 0.06),
            transparent);

    transform: translateX(-100%);

    animation: noteScan 4s ease-in-out 1.5s infinite;
}

.note-icon {
    position: relative;
    z-index: 1;

    display: grid;
    place-items: center;

    width: 26px;
    height: 26px;

    flex-shrink: 0;

    border-radius: 6px;

    background: #1e293b;

    color: #93c5fd;

    animation: thermometerPulse 2.5s ease-in-out infinite;
}

.hardware-note>span {
    position: relative;
    z-index: 1;
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes headerEnter {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes iconEnter {
    from {
        opacity: 0;
        transform: scale(0.65) rotate(-15deg);
    }

    to {
        opacity: 1;
        transform: scale(1) rotate(0);
    }
}

@keyframes contentEnter {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes iconFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}

@keyframes iconScan {

    0%,
    35% {
        transform: translateX(-100%);
    }

    70%,
    100% {
        transform: translateX(100%);
    }
}

@keyframes sectionHeadingEnter {
    from {
        opacity: 0;
        transform: translateX(-8px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes componentEnter {
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

@keyframes cardScan {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(100%);
    }
}

@keyframes statusPulse {
    0% {
        box-shadow:
            0 0 0 0 rgba(134, 239, 172, 0.45);
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

@keyframes supportEnter {
    from {
        opacity: 0;
        transform: translateX(-12px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes noteEnter {
    from {
        opacity: 0;
        transform:
            translateY(12px) scale(0.98);
    }

    to {
        opacity: 1;
        transform:
            translateY(0) scale(1);
    }
}

@keyframes noteScan {

    0%,
    35% {
        transform: translateX(-100%);
    }

    70%,
    100% {
        transform: translateX(100%);
    }
}

@keyframes thermometerPulse {

    0%,
    100% {
        transform: scale(1);
        box-shadow: none;
    }

    50% {
        transform: scale(1.06);
        box-shadow:
            0 0 12px rgba(147, 197, 253, 0.12);
    }
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 600px) {
    .support-list {
        grid-template-columns: 1fr;
    }

    .components-grid {
        grid-template-columns: 1fr;
    }

    .hardware-view {
        padding: 16px;
    }
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>