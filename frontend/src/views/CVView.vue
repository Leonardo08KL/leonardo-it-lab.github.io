<script setup>
import {
    User,
    Code2,
    Network,
    Server,
    GraduationCap,
    Briefcase,
    WorkflowIcon,
    Workflow,
    Languages,
    LanguagesIcon,
    LucideLanguages,
    Download
} from 'lucide-vue-next'

import { technicalSkills } from '../data/technicalSkills'
import { experiences } from '../data/experience'
import { education } from '../data/education'
import { languages } from '../data/lenguages'

const skills = [
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'PHP',
    '.NET',
    'Visual Basic',
    'Vue.js',
    'Angular',
    'Linux',
    'Windows Server',
    'Networking'
]

const areas = [
    {
        title: 'Software Development',
        description:
            'Desarrollo de aplicaciones web y organización de proyectos frontend/backend.',
        icon: Code2
    },
    {
        title: 'Networks',
        description:
            'Administración y diagnóstico de redes, conectividad y servicios de red.',
        icon: Network
    },
    {
        title: 'Infrastructure',
        description:
            'Administración de sistemas Windows y Linux, servidores y servicios.',
        icon: Server
    }
]


</script>

<template>
    <section class="cv-view">
        <header class="cv-header">
            <div class="cv-avatar">
                👨‍💻
            </div>

            <div class="cv-identity">
                <h2>Leonardo Covarrubias Lemus</h2>

                <p>
                    Junior Developer / IT Support
                </p>

                <span>
                    Web Development • Networks • Infrastructure
                </span>
            </div>

            <div class="cv-download">
                <a href="/Covarrubias Lemus Leonardo CV.pdf" download="cv-leonardo-covarrubias.pdf"
                    class="cv-download-button">
                    <Download :size="16" /> <span>Descargar CV</span>
                </a>
            </div>
        </header>

        <section class="cv-section">
            <div class="section-title">
                <User :size="17" />
                <h3>Profile</h3>
            </div>

            <p class="profile">
                Desarrollador backend con experiencia profesional en desarrollo e integración de APIs REST y SOAP,
                aplicaciones empresariales ymantenimiento de sistemas en producción. Experiencia con Java, Spring Boot,
                PHP, Laravel y bases de datos SQL/NoSQL. Conocimientos enfacturación electrónica CFDI, autenticación,
                integración de sistemas, Git, Docker, Jenkins, Linux, Postman y Swagger.
            </p>
        </section>

        <section class="cv-section">
            <div class="section-title">
                <Briefcase :size="17" />
                <h3>Technical Areas</h3>
            </div>

            <div class="areas">
                <article v-for="area in areas" :key="area.title" class="area">
                    <component :is="area.icon" :size="20" />

                    <div>
                        <strong>{{ area.title }}</strong>
                        <p>{{ area.description }}</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="cv-section">
            <div class="section-title">
                <Code2 :size="17" />
                <h3>Technologies</h3>
            </div>

            <div class="technologies">
                <span v-for="skill in skills" :key="skill">
                    {{ skill }}
                </span>
            </div>
        </section>

        <!-- ------------------------------------------------------------------- -->
        <!-- Education -->
        <!-- ------------------------------------------------------------------- -->
        <section class="cv-section education">
            <div class="section-title">
                <GraduationCap :size="17" />
                <h3>Educación</h3>
            </div>
            <div class="education-list">
                <article v-for="item in education" :key="`${item.degree}-${item.institution}`" class="education-item">
                    <div class="education-icon"> <img :src="item.logo" :alt="item.logoAlt" width="18" height="18" />
                    </div>
                    <div class="education-content">
                        <div class="education-header">
                            <div>
                                <h4> {{ item.degree }} </h4>
                                <p class="education-institution"> {{ item.institution }} </p>
                            </div> <span class="education-date"> {{ item.date }} </span>
                        </div> <span class="education-location"> {{ item.location }} </span>
                    </div>
                </article>
            </div>
        </section>

        <!-- ------------------------------------------------------------------- -->
        <!-- Experience -->
        <!-- ------------------------------------------------------------------- -->
        <section class="cv-section experience-section">
            <div class="section-title">
                <Workflow :size="17" />
                <h3>Experiencia Laboral</h3>
            </div>
            <div v-for="experience in experiences" :key="`${experience.company}-${experience.position}`"
                class="experience"> <!-- Encabezado -->
                <div class="experience-header">
                    <div>
                        <h4> <b>{{ experience.company }}</b> - {{ experience.position }} </h4> <span
                            class="experience-location"> {{ experience.location }} </span>
                    </div> <span class="experience-date"> {{ experience.date }} </span>
                </div> <!-- Descripción -->
                <div class="experience-description">
                    <ul>
                        <li v-for="(description, index) in experience.description" :key="index"> {{ description }} </li>
                    </ul>
                </div> <!-- Tecnologías -->
                <div class="experience-technologies"> <span v-for="technology in experience.technologies"
                        :key="technology"> {{ technology }} </span> </div>
            </div>
        </section>

        <!-- ------------------------------------------------------------------- -->
        <!-- Technical Skills Section -->
        <!-- ------------------------------------------------------------------- -->
        <section class="cv-section technical-skills">
            <div class="section-title">
                <Code2 :size="17" />
                <h3>Habilidades Técnicas</h3>
            </div>

            <div class="technical-skills-grid">

                <article v-for="category in technicalSkills" :key="category.title" class="technical-skill">

                    <div class="technical-skill-header">
                        <component :is="category.icon" :size="16" />

                        <h4>
                            {{ category.title }}
                        </h4>
                    </div>

                    <div class="skill-tags">
                        <span v-for="skill in category.skills" :key="skill">
                            {{ skill }}
                        </span>
                    </div>

                </article>

            </div>
        </section>

        <!-- ------------------------------------------------------------------- -->
        <!-- Languages Section -->
        <!-- ------------------------------------------------------------------- -->
        <section class="cv-section">
            <div class="section-title">
                <LucideLanguages :size="17" />
                <h3>Idiomas</h3>
            </div>

            <div class="areas">
                <article v-for="language in languages" :key="language.title" class="area">
                    <img :src="language.icon" :alt="`Bandera de ${language.title}`" width="24" height="18" />

                    <div>
                        <strong>{{ language.title }}</strong>
                        <p>{{ language.description }}</p>
                    </div>
                </article>
            </div>
        </section>
    </section>
</template>

<style scoped>
.area img {
    width: 24px;
    height: 18px;

    object-fit: cover;
    border-radius: 3px;

    flex-shrink: 0;
}

.cv-view {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 22px;

    overflow-y: auto;

    background: #0f172a;
    color: #cbd5e1;
}

.cv-header {
    display: flex;
    align-items: center;
    gap: 15px;

    padding-bottom: 18px;
    margin-bottom: 18px;

    border-bottom: 1px solid #263241;
}

.cv-avatar {
    width: 58px;
    height: 58px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    background: #1e293b;

    font-size: 28px;
}

.cv-download {
    margin-left: auto;
    font-size: 12px;
}

.cv-identity h2 {
    margin: 0;

    color: #f8fafc;
    font-size: 23px;
}

.cv-identity p {
    margin: 4px 0;

    color: #93c5fd;
    font-size: 13px;
}

.cv-identity span {
    color: #64748b;
    font-size: 11px;
}

.cv-section {
    margin-bottom: 20px;
    border-bottom: 1px solid #263241;
    padding-bottom: 18px;
    /* margin-bottom: 18px; */
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 10px;

    color: #93c5fd;
}

.section-title h3 {
    margin: 0;

    color: #e2e8f0;
    font-size: 13px;
}

.profile,
.education p {
    margin: 0;

    color: #94a3b8;
    font-size: 12px;
    line-height: 1.7;
}

.areas {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

    gap: 9px;
}

.area {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    padding: 12px;

    border: 1px solid #263241;
    border-radius: 7px;

    background: #111827;

    color: #93c5fd;
}

.area strong {
    color: #f8fafc;
    font-size: 11px;
}

.area p {
    margin: 4px 0 0;

    color: #64748b;
    font-size: 10px;
    line-height: 1.5;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.technologies span {
    padding: 6px 9px;

    border: 1px solid #334155;
    border-radius: 5px;

    background: #111827;
    color: #cbd5e1;

    font-size: 10px;
}


/* =========================================
   EXPERIENCIA LABORAL
   ========================================= */

.experience-section {
    margin-top: 20px;
}

.experience {
    position: relative;
    padding: 18px 20px;
    margin-top: 12px;

    background: rgba(15, 23, 42, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 10px;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.2s ease;
}

.experience:hover {
    background: rgba(15, 23, 42, 0.75);
    border-color: rgba(96, 165, 250, 0.35);
    transform: translateY(-2px);
}


/* =========================================
   ENCABEZADO
   ========================================= */

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    padding-bottom: 14px;
    margin-bottom: 14px;

    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.experience-header h4 {
    margin: 0;

    font-size: 16px;
    line-height: 1.4;
    font-weight: 500;

    color: #e2e8f0;
}

.experience-header h4 b {
    color: #f8fafc;
    font-weight: 700;
}

.experience-location {
    display: block;

    margin-top: 5px;

    font-size: 12px;
    color: #94a3b8;
}

.experience-date {
    flex-shrink: 0;

    padding: 5px 9px;

    border-radius: 6px;

    font-size: 11px;
    font-weight: 600;

    color: #93c5fd;
    background: rgba(59, 130, 246, 0.10);
    border: 1px solid rgba(59, 130, 246, 0.20);

    white-space: nowrap;
}


/* =========================================
   DESCRIPCIÓN / RESPONSABILIDADES
   ========================================= */

.experience-description {
    color: #cbd5e1;
}

.experience-description ul {
    margin: 0;
    padding: 0;

    list-style: none;
}

.experience-description li {
    position: relative;

    padding-left: 18px;
    margin-bottom: 10px;

    font-size: 13px;
    line-height: 1.65;

    color: #cbd5e1;
}

.experience-description li:last-child {
    margin-bottom: 0;
}

.experience-description li::before {
    content: '›';

    position: absolute;
    left: 0;
    top: 0;

    color: #60a5fa;

    font-size: 17px;
    font-weight: 700;
}

.experience-description strong {
    color: #f1f5f9;
    font-weight: 600;
}


/* =========================================
   TECNOLOGÍAS
   ========================================= */

.experience-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    margin-top: 18px;
    padding-top: 15px;

    border-top: 1px solid rgba(148, 163, 184, 0.12);
}

.experience-technologies span {
    display: inline-flex;
    align-items: center;

    padding: 4px 8px;

    border-radius: 5px;

    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2px;

    color: #bfdbfe;

    background: rgba(59, 130, 246, 0.10);
    border: 1px solid rgba(96, 165, 250, 0.18);

    transition:
        background 0.2s ease,
        border-color 0.2s ease;
}

.experience-technologies span:hover {
    background: rgba(59, 130, 246, 0.18);
    border-color: rgba(96, 165, 250, 0.35);
}


/* =========================================
   RESPONSIVE
   ========================================= */

@media (max-width: 700px) {
    .experience {
        padding: 15px;
    }

    .experience-header {
        flex-direction: column;
        gap: 10px;
    }

    .experience-date {
        align-self: flex-start;
    }

    .experience-description li {
        font-size: 12px;
        line-height: 1.6;
    }

    .experience-technologies {
        gap: 5px;
    }

    .experience-technologies span {
        font-size: 9px;
    }
}

/* =========================================
   EDUCACIÓN
   ========================================= */

.education {
    margin-top: 20px;
}

.education-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 12px;
}

.education-item {
    display: flex;
    gap: 14px;

    padding: 15px 17px;

    background: rgba(15, 23, 42, 0.55);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 9px;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.education-item:hover {
    background: rgba(15, 23, 42, 0.75);
    border-color: rgba(96, 165, 250, 0.30);

    transform: translateX(2px);
}


/* =========================================
   ICONO
   ========================================= */

.education-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 38px;
    height: 38px;

    border-radius: 8px;

    color: #93c5fd;

    background: rgba(59, 130, 246, 0.10);
    border: 1px solid rgba(96, 165, 250, 0.18);
}


/* =========================================
   CONTENIDO
   ========================================= */

.education-content {
    flex: 1;
    min-width: 0;
}

.education-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 15px;
}

.education-header h4 {
    margin: 0;

    font-size: 14px;
    line-height: 1.4;

    color: #f1f5f9;
    font-weight: 600;
}

.education-institution {
    margin: 4px 0 0;

    font-size: 12px;
    line-height: 1.4;

    color: #94a3b8;
}


/* =========================================
   FECHA
   ========================================= */

.education-date {
    flex-shrink: 0;

    padding: 4px 8px;

    border-radius: 5px;

    font-size: 10px;
    font-weight: 600;

    color: #93c5fd;

    background: rgba(59, 130, 246, 0.10);
    border: 1px solid rgba(96, 165, 250, 0.18);

    white-space: nowrap;
}


/* =========================================
   UBICACIÓN
   ========================================= */

.education-location {
    display: block;

    margin-top: 7px;

    font-size: 11px;

    color: #64748b;
}


/* =========================================
   RESPONSIVE
   ========================================= */

@media (max-width: 700px) {
    .education-item {
        padding: 13px;
    }

    .education-header {
        flex-direction: column;
        gap: 7px;
    }

    .education-date {
        align-self: flex-start;
    }

    .education-header h4 {
        font-size: 13px;
    }
}


/* =========================================
   HABILIDADES TÉCNICAS
   ========================================= */

.technical-skills {
    margin-top: 24px;
}

/* Grid principal */
.technical-skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 14px;
}

/* Tarjeta */
.technical-skill {
    position: relative;
    padding: 16px;
    background:
        linear-gradient(145deg,
            rgba(30, 41, 59, 0.72),
            rgba(15, 23, 42, 0.62));

    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 10px;

    overflow: hidden;

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

/* Línea superior decorativa */
.technical-skill::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;

    background: rgba(96, 165, 250, 0.35);

    opacity: 0.6;

    transition:
        opacity 0.2s ease,
        background 0.2s ease;
}

/* Efecto hover */
.technical-skill:hover {
    transform: translateY(-3px);

    background:
        linear-gradient(145deg,
            rgba(30, 41, 59, 0.90),
            rgba(15, 23, 42, 0.80));

    border-color: rgba(96, 165, 250, 0.35);

    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.20);
}

.technical-skill:hover::before {
    opacity: 1;
    background: rgba(96, 165, 250, 0.75);
}


/* =========================================
   HEADER DE CATEGORÍA
   ========================================= */

.technical-skill-header {
    display: flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 12px;
    padding-bottom: 10px;

    border-bottom: 1px solid rgba(148, 163, 184, 0.10);

    color: #93c5fd;
}

.technical-skill-header svg {
    flex-shrink: 0;

    padding: 5px;

    width: 28px;
    height: 28px;

    border-radius: 7px;

    background: rgba(59, 130, 246, 0.10);

    border: 1px solid rgba(96, 165, 250, 0.15);
}

.technical-skill-header h4 {
    margin: 0;

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 0.3px;

    color: #f1f5f9;
}


/* =========================================
   TAGS / TECNOLOGÍAS
   ========================================= */

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.skill-tags span {
    display: inline-flex;
    align-items: center;

    min-height: 24px;

    padding: 4px 8px;

    border-radius: 5px;

    font-size: 10px;
    font-weight: 600;

    letter-spacing: 0.15px;

    color: #bfdbfe;

    background: rgba(59, 130, 246, 0.08);

    border: 1px solid rgba(96, 165, 250, 0.14);

    transition:
        background 0.15s ease,
        border-color 0.15s ease,
        color 0.15s ease,
        transform 0.15s ease;
}

.skill-tags span:hover {
    transform: translateY(-1px);

    color: #dbeafe;

    background: rgba(59, 130, 246, 0.17);

    border-color: rgba(96, 165, 250, 0.32);
}


/* =========================================
   DIFERENCIACIÓN VISUAL
   ========================================= */

/* Primera tarjeta */
.technical-skill:nth-child(1) {
    border-left: 2px solid rgba(96, 165, 250, 0.45);
}

/* Backend */
.technical-skill:nth-child(2) {
    border-left: 2px solid rgba(129, 140, 248, 0.45);
}

/* Bases de datos */
.technical-skill:nth-child(3) {
    border-left: 2px solid rgba(45, 212, 191, 0.40);
}

/* Desarrollo web */
.technical-skill:nth-child(4) {
    border-left: 2px solid rgba(56, 189, 248, 0.40);
}

/* DevOps */
.technical-skill:nth-child(5) {
    border-left: 2px solid rgba(167, 139, 250, 0.40);
}

/* Herramientas */
.technical-skill:nth-child(6) {
    border-left: 2px solid rgba(251, 191, 36, 0.40);
}

/* Metodologías */
.technical-skill:nth-child(7) {
    border-left: 2px solid rgba(52, 211, 153, 0.40);
}


/* =========================================
   RESPONSIVE
   ========================================= */

@media (max-width: 700px) {

    .technical-skills {
        margin-top: 20px;
    }

    .technical-skills-grid {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .technical-skill {
        padding: 14px;
    }

    .technical-skill-header {
        margin-bottom: 10px;
    }

    .technical-skill-header h4 {
        font-size: 11px;
    }

    .skill-tags {
        gap: 5px;
    }

    .skill-tags span {
        min-height: 22px;
        padding: 3px 7px;
        font-size: 9px;
    }
}


/* =========================================
   DESCARGAR CV
   ========================================= */

.cv-download {
    display: flex;
    justify-content: center;

    /* margin-top: 20px; */
    /* padding-top: 16px; */

    /* border-top: 1px solid rgba(148, 163, 184, 0.12); */
}

.cv-download-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 9px 14px;

    border-radius: 7px;

    color: #dbeafe;
    background: rgba(59, 130, 246, 0.12);

    border: 1px solid rgba(96, 165, 250, 0.25);

    font-size: 11px;
    font-weight: 600;

    text-decoration: none;

    cursor: pointer;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.cv-download-button:hover {
    color: #ffffff;

    background: rgba(59, 130, 246, 0.22);

    border-color: rgba(96, 165, 250, 0.45);

    transform: translateY(-2px);

    box-shadow:
        0 5px 15px rgba(0, 0, 0, 0.20);
}

.cv-download-button:active {
    transform: translateY(0);
}

.cv-download-button svg {
    flex-shrink: 0;
}


/* Responsive */

@media (max-width: 700px) {

    .cv-download {
        justify-content: stretch;
    }

    .cv-download-button {
        width: 100%;
        justify-content: center;
    }
}
</style>