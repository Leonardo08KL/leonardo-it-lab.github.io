<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../../data/projects'

const openProject = (project) => {
    console.log('Project selected:', project)
}
</script>

<template>
    <section class="project-list">

        <!-- HEADER -->
        <header class="projects-header">

            <div class="header-content">
                <div class="title-row">
                    <span class="title-indicator"></span>

                    <h2>Projects</h2>
                </div>

                <p>
                    Proyectos de desarrollo, infraestructura y soporte TI.
                </p>
            </div>

            <span class="project-count">
                <span class="count-dot"></span>
                {{ projects.length }} proyectos
            </span>

        </header>

        <!-- PROJECTS -->
        <div class="projects-grid">

            <div v-for="(project, index) in projects" :key="project.id" class="project-item"
                :style="{ '--delay': `${index * 70}ms` }">
                <ProjectCard :project="project" @open="openProject" />
            </div>

        </div>

    </section>
</template>

<style scoped>
/* =========================================================
   PROJECT LIST
   ========================================================= */

.project-list {

    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;

    /*
     * Mejora el desplazamiento en dispositivos táctiles.
     */
    scroll-behavior: smooth;
    overscroll-behavior: contain;

}


/* =========================================================
   HEADER
   ========================================================= */

.projects-header {

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;

    margin-bottom: 20px;

    animation: header-enter 500ms cubic-bezier(.22, 1, .36, 1) both;

}


/* =========================================================
   HEADER CONTENT
   ========================================================= */

.header-content {

    min-width: 0;

}


.title-row {

    display: flex;
    align-items: center;

    gap: 9px;

}


.title-indicator {

    width: 4px;
    height: 22px;

    border-radius: 999px;

    background: #60a5fa;

    box-shadow:
        0 0 8px rgba(96, 165, 250, .35);

    animation: indicator-pulse 2.5s ease-in-out infinite;

}


.projects-header h2 {

    margin: 0 0 5px;

    color: #f8fafc;

    font-size: 22px;
    font-weight: 600;

    letter-spacing: -.3px;

}


.projects-header p {

    margin: 0;

    color: #94a3b8;

    font-size: 13px;

    line-height: 1.5;

}


/* =========================================================
   PROJECT COUNT
   ========================================================= */

.project-count {

    display: inline-flex;
    align-items: center;

    gap: 7px;

    padding: 6px 10px;

    border: 1px solid #334155;
    border-radius: 7px;

    color: #93c5fd;

    background:
        linear-gradient(180deg,
            rgba(30, 41, 59, .9),
            rgba(17, 24, 39, .9));

    font-size: 11px;
    font-weight: 500;

    white-space: nowrap;

    transition:
        border-color 180ms ease,
        background 180ms ease,
        box-shadow 180ms ease,
        transform 180ms ease;

    animation: count-enter 550ms cubic-bezier(.22, 1, .36, 1) 100ms both;

}


.project-count:hover {

    border-color: #475569;

    background:
        linear-gradient(180deg,
            rgba(37, 52, 74, .95),
            rgba(17, 24, 39, .95));

    box-shadow:
        0 4px 14px rgba(0, 0, 0, .18);

    transform: translateY(-1px);

}


.count-dot {

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #60a5fa;

    box-shadow:
        0 0 7px rgba(96, 165, 250, .65);

}


/* =========================================================
   PROJECT GRID
   ========================================================= */

.projects-grid {

    display: grid;

    grid-template-columns:
        repeat(auto-fit,
            minmax(260px, 1fr));

    gap: 14px;

    align-items: stretch;

}


/* =========================================================
   PROJECT ITEM
   ========================================================= */

.project-item {

    min-width: 0;

    /*
     * Cada tarjeta aparece ligeramente después
     * de la anterior.
     */
    animation:
        project-enter 550ms cubic-bezier(.22, 1, .36, 1) var(--delay) both;

    /*
     * Evita que el navegador renderice la animación
     * de manera innecesariamente costosa.
     */
    will-change: transform, opacity;

}


/* =========================================================
   SCROLLBAR
   ========================================================= */

.project-list::-webkit-scrollbar {

    width: 7px;

}


.project-list::-webkit-scrollbar-track {

    background: transparent;

}


.project-list::-webkit-scrollbar-thumb {

    background: #334155;

    border-radius: 999px;

    transition: background 180ms ease;

}


.project-list::-webkit-scrollbar-thumb:hover {

    background: #475569;

}


/* =========================================================
   ANIMATIONS
   ========================================================= */

@keyframes header-enter {

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


@keyframes count-enter {

    from {

        opacity: 0;

        transform:
            translateY(-6px) scale(.96);

    }

    to {

        opacity: 1;

        transform:
            translateY(0) scale(1);

    }

}


@keyframes project-enter {

    from {

        opacity: 0;

        transform:
            translateY(16px) scale(.98);

    }

    to {

        opacity: 1;

        transform:
            translateY(0) scale(1);

    }

}


@keyframes indicator-pulse {

    0%,
    100% {

        opacity: .65;

        box-shadow:
            0 0 6px rgba(96, 165, 250, .25);

    }

    50% {

        opacity: 1;

        box-shadow:
            0 0 10px rgba(96, 165, 250, .45);

    }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    .projects-header,
    .project-count,
    .project-item,
    .title-indicator {

        animation: none;

    }

    .project-list {

        scroll-behavior: auto;

    }

}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 700px) {

    .projects-header {

        flex-direction: column;

    }

    .project-count {

        align-self: flex-start;

    }

    .projects-grid {

        grid-template-columns: 1fr;

    }

}


@media (max-width: 450px) {

    .project-list {

        padding: 15px;

    }

    .projects-header {

        gap: 12px;

        margin-bottom: 16px;

    }

    .projects-header h2 {

        font-size: 20px;

    }

    .projects-grid {

        gap: 11px;

    }

}
</style>