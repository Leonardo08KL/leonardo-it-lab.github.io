<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['open'])

import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
    <article class="project-card">
        <div class="project-header">
            <!-- <div class="project-icon">
                {{ project.icon }}
            </div> -->

            <div class="project-info">
                <h3>{{ t(project.name) }}</h3>
                <span>{{ t(project.category) }}</span>
            </div>
        </div>

        <p class="project-description">
            {{ t(project.description) }}
        </p>

        <div class="project-technologies">
            <span v-for="technology in project.technologies" :key="technology" class="technology">
                {{ technology }}
            </span>
        </div>

        <div class="project-footer">
            <span class="project-status">
                {{ t(project.status) || 'Completed' }}
            </span>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
                class="project-button">
                GitHub
            </a>

            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                class="project-button primary">
                Ver proyecto
            </a>

        </div>
    </article>
</template>

<style scoped>
.project-card {
    padding: 18px;

    border: 1px solid #263241;
    border-radius: 10px;

    background: #111827;

    transition:
        border-color 0.2s ease,
        transform 0.2s ease;
}

.project-card:hover {
    border-color: #475569;
    transform: translateY(-2px);
}

.project-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
}

.project-icon {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 9px;
    background: #1e293b;

    font-size: 20px;
}

.project-info {
    min-width: 0;
}

.project-info h3 {
    margin: 0;
    color: #f8fafc;
    font-size: 16px;
}

.project-info span {
    display: block;
    margin-top: 3px;

    color: #94a3b8;
    font-size: 12px;
}

.project-description {
    margin: 0 0 14px;

    color: #cbd5e1;
    font-size: 13px;
    line-height: 1.6;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.technology {
    padding: 4px 8px;

    border: 1px solid #334155;
    border-radius: 5px;

    color: #93c5fd;
    background: #0f172a;

    font-size: 11px;
}

.project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;
    padding-top: 12px;

    border-top: 1px solid #1e293b;
}

.project-status {
    color: #86efac;
    font-size: 11px;
}

.project-button {
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #334155;
    border-radius: 5px;
    background: #1e293b;
    color: #cbd5e1;
    cursor: pointer;
    text-decoration: none;
    font-size: 13px;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.project-button:hover {
    background: #334155;
    border-color: #475569;
}
</style>