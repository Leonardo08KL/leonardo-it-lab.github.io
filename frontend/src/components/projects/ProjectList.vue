<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../../data/projects'

const openProject = (project) => {
    console.log('Project selected:', project)
}
</script>

<template>
    <section class="project-list">
        <header class="projects-header">
            <div>
                <h2>Projects</h2>
                <p>
                    Proyectos de desarrollo, infraestructura y soporte TI.
                </p>
            </div>

            <span class="project-count">
                {{ projects.length }} proyectos
            </span>
        </header>

        <div class="projects-grid">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" @open="openProject" />
        </div>
    </section>
</template>

<style scoped>
.project-list {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;
}

.projects-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;
    margin-bottom: 20px;
}

.projects-header h2 {
    margin: 0 0 5px;

    color: #f8fafc;
    font-size: 22px;
}

.projects-header p {
    margin: 0;

    color: #94a3b8;
    font-size: 13px;
}

.project-count {
    padding: 6px 10px;

    border: 1px solid #334155;
    border-radius: 6px;

    color: #93c5fd;
    background: #111827;

    font-size: 11px;
    white-space: nowrap;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,
            minmax(260px, 1fr));

    gap: 14px;
}

@media (max-width: 700px) {
    .projects-header {
        flex-direction: column;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>