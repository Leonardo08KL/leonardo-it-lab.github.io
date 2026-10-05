<script setup>

import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

const changeLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
}
const skillGroups = [
    {
        title: locale === 'es' ? 'Programacion' : 'Programming',
        skills: [
            { name: 'Java', level: 80 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 90 },
            { name: 'PHP', level: 75 },
            { name: '.NET', level: 65 },
            { name: 'Visual Basic', level: 60 }
        ]
    },
    {
        title: locale === 'es' ? 'Frontend' : 'Frontend',
        skills: [
            { name: 'Vue.js', level: 85 },
            { name: 'Angular', level: 70 },
            { name: 'Responsive Design', level: 90 },
            { name: 'REST APIs', level: 85 }
        ]
    },
    {
        title: 'Infrastructure',
        skills: [
            { name: 'Windows Server', level: 75 },
            { name: 'Linux', level: 80 },
            { name: 'Server Administration', level: 70 },
            { name: 'System Administration', level: 75 }
        ]
    },
    {
        title: 'Networks',
        skills: [
            { name: 'TCP/IP', level: 80 },
            { name: 'LAN', level: 85 },
            { name: 'DNS', level: 75 },
            { name: 'DHCP', level: 75 },
            { name: 'Network Troubleshooting', level: 80 }
        ]
    },
    {
        title: 'IT Support',
        skills: [
            { name: 'Hardware Diagnostics', level: 90 },
            { name: 'PC Maintenance', level: 95 },
            { name: 'Operating Systems', level: 90 },
            { name: 'Driver Management', level: 85 },
            { name: 'Troubleshooting', level: 90 }
        ]
    }
]

</script>

<template>
    <section class="skills-view">

        <!-- Header -->
        <header class="skills-header">
            <div class="header-content">
                <h2>{{ t('technicalSkills.title') }}</h2>
                <p> {{ t('technicalSkills.description') }} </p>
            </div>
        </header>

        <!-- Skills -->
        <div class="skills-grid">

            <article v-for="(group, groupIndex) in skillGroups" :key="group.title" class="skill-group"
                :style="{ '--delay': `${groupIndex * 100}ms` }">
                <!-- Card decoration -->
                <div class="card-glow"></div>

                <div class="group-header">
                    <span class="group-number">
                        {{ String(groupIndex + 1).padStart(2, '0') }}
                    </span>

                    <h3>{{ t(group.title) }}</h3>
                </div>

                <div class="skills">
                    <div v-for="(skill, skillIndex) in group.skills" :key="skill.name" class="skill" :style="{
                        '--skill-delay': `${skillIndex * 45}ms`,
                        '--skill-level': `${skill.level}%`
                    }">
                        <div class="skill-info">
                            <span class="skill-name">
                                {{ skill.name }}
                            </span>

                            <span class="skill-percentage">
                                {{ skill.level }}%
                            </span>
                        </div>

                        <div class="skill-bar">
                            <div class="skill-progress"></div>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </section>
</template>

<style scoped>
/* ========================================
   MAIN
======================================== */

.skills-view {
    position: relative;

    width: 100%;
    height: 100%;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;

    scrollbar-width: thin;
    scrollbar-color: #334155 transparent;
}


/* ========================================
   HEADER
======================================== */

.skills-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    margin-bottom: 20px;

    animation: headerEnter 0.6s ease both;
}

.header-line {
    width: 3px;
    height: 42px;

    flex-shrink: 0;

    border-radius: 4px;

    background: #60a5fa;

    box-shadow:
        0 0 8px rgba(96, 165, 250, 0.5);

    animation: lineGrow 0.7s ease both;
}

.skills-header h2 {
    margin: 0 0 5px;

    color: #f8fafc;

    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.3px;
}

.skills-header p {
    margin: 0;

    color: #94a3b8;

    font-size: 13px;
}


/* ========================================
   GRID
======================================== */

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 14px;
}


/* ========================================
   SKILL GROUP
======================================== */

.skill-group {
    position: relative;

    overflow: hidden;

    padding: 16px;

    border: 1px solid #263241;
    border-radius: 9px;

    background:
        linear-gradient(145deg,
            rgba(30, 41, 59, 0.55),
            rgba(15, 23, 42, 0.9));

    opacity: 0;

    transform:
        translateY(20px) scale(0.97);

    animation:
        cardEnter 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;

    animation-delay: var(--delay);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
}


/* ========================================
   CARD HOVER
======================================== */

.skill-group:hover {
    transform: translateY(-5px);

    border-color: #3b82f6;

    background:
        linear-gradient(145deg,
            rgba(30, 41, 59, 0.8),
            rgba(15, 23, 42, 0.95));

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.25),
        0 0 18px rgba(59, 130, 246, 0.08);
}


/* ========================================
   CARD LIGHT EFFECT
======================================== */

.card-glow {
    position: absolute;

    top: -80px;
    right: -80px;

    width: 150px;
    height: 150px;

    border-radius: 50%;

    background: rgba(59, 130, 246, 0.08);

    filter: blur(25px);

    opacity: 0;

    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

.skill-group:hover .card-glow {
    opacity: 1;

    transform: scale(1.4);
}


/* ========================================
   GROUP HEADER
======================================== */

.group-header {
    display: flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 14px;
}

.group-number {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;

    border-radius: 6px;

    background: #172033;

    color: #60a5fa;

    font-size: 9px;
    font-weight: 700;

    transition:
        background 0.3s ease,
        transform 0.3s ease;
}

.skill-group:hover .group-number {
    background: #1d4ed8;

    color: #eff6ff;

    transform: rotate(-5deg) scale(1.08);
}

.skill-group h3 {
    margin: 0;

    color: #93c5fd;

    font-size: 14px;
    font-weight: 600;

    transition:
        color 0.3s ease,
        transform 0.3s ease;
}

.skill-group:hover h3 {
    color: #bfdbfe;

    transform: translateX(2px);
}


/* ========================================
   SKILLS
======================================== */

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}


/* ========================================
   INDIVIDUAL SKILL
======================================== */
/* ========================================
   SKILLS
======================================== */

.skills {
    display: flex;
    flex-direction: column;

    gap: 12px;
}


/* ========================================
   INDIVIDUAL SKILL
======================================== */

.skill {
    position: relative;

    width: 100%;

    padding: 7px 0;

    opacity: 0;

    transform: translateY(8px);

    animation:
        skillEnter 0.4s ease forwards;

    animation-delay:
        calc(var(--delay) + var(--skill-delay));
}


/* ========================================
   SKILL INFO
======================================== */

.skill-info {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;
}


/* ========================================
   SKILL NAME
======================================== */

.skill-name {
    color: #cbd5e1;

    font-size: 11px;
    font-weight: 500;

    transition:
        color 0.25s ease,
        transform 0.25s ease;
}


/* ========================================
   PERCENTAGE
======================================== */

.skill-percentage {
    color: #64748b;

    font-size: 10px;
    font-weight: 600;

    opacity: 0;

    transform: translateX(-5px);

    transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        color 0.3s ease;
}


/* ========================================
   BAR
======================================== */

.skill-bar {
    position: relative;

    width: 100%;
    height: 4px;

    overflow: hidden;

    border-radius: 10px;

    background: #1e293b;
}


/* ========================================
   PROGRESS
======================================== */

.skill-progress {
    width: var(--skill-level);
    height: 100%;

    border-radius: inherit;

    background: #60a5fa;

    transform-origin: left;

    transform: scaleX(0);

    transition:
        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);

    box-shadow:
        0 0 8px rgba(96, 165, 250, 0.45);
}


/* ========================================
   HOVER
======================================== */

.skill:hover .skill-name {
    color: #f8fafc;

    transform: translateX(3px);
}

.skill:hover .skill-percentage {
    opacity: 1;

    color: #93c5fd;

    transform: translateX(0);
}

.skill:hover .skill-progress {
    transform: scaleX(1);
}


/* ========================================
   BAR GLOW
======================================== */

.skill-progress::after {
    content: '';

    position: absolute;

    top: 0;
    right: 0;

    width: 30px;
    height: 100%;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.5));

    opacity: 0;

    transition:
        opacity 0.3s ease;
}

.skill:hover .skill-progress::after {
    opacity: 1;
}


/* ========================================
   ANIMATION
======================================== */

@keyframes skillEnter {
    from {
        opacity: 0;

        transform:
            translateY(8px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}

/* ========================================
   ANIMATIONS
======================================== */

@keyframes headerEnter {
    from {
        opacity: 0;
        transform: translateY(-12px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


@keyframes lineGrow {
    from {
        opacity: 0;
        height: 0;
    }

    to {
        opacity: 1;
        height: 42px;
    }
}


@keyframes cardEnter {
    from {
        opacity: 0;
        transform:
            translateY(20px) scale(0.97);
    }

    to {
        opacity: 1;
        transform:
            translateY(0) scale(1);
    }
}


@keyframes skillEnter {
    from {
        opacity: 0;
        transform:
            translateY(8px) scale(0.95);
    }

    to {
        opacity: 1;
        transform:
            translateY(0) scale(1);
    }
}


/* ========================================
   SCROLLBAR
======================================== */

.skills-view::-webkit-scrollbar {
    width: 6px;
}

.skills-view::-webkit-scrollbar-track {
    background: transparent;
}

.skills-view::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background: #334155;
}

.skills-view::-webkit-scrollbar-thumb:hover {
    background: #475569;
}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {

    .skills-header,
    .header-line,
    .skill-group,
    .skill {
        animation: none;

        opacity: 1;

        transform: none;
    }

    .skill-group,
    .skill,
    .group-number,
    .skill-group h3,
    .card-glow {
        transition: none;
    }
}


/* ======================================== HEADER ======================================== */
.skills-header {
    position: relative;
    margin-bottom: 22px;
    padding-bottom: 14px;
    border-bottom: 1px solid #263241;
    animation: headerEnter 0.6s ease both;
}

.header-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.skills-header h2 {
    margin: 0;
    color: #f8fafc;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.3px;
}

.skills-header p {
    margin: 0;
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.5;
}

/* Línea decorativa debajo del título */
.skills-header::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 70px;
    height: 2px;
    border-radius: 2px;
    background: #60a5fa;
    box-shadow: 0 0 8px rgba(96, 165, 250, 0.45);
    animation: titleLine 0.7s ease both;
}

/* ======================================== HEADER ANIMATIONS ======================================== */
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

@keyframes titleLine {
    from {
        width: 0;
        opacity: 0;
    }

    to {
        width: 70px;
        opacity: 1;
    }
}
</style>
