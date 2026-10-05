<script setup>
import { reactive, ref } from "vue";

import { User, Terminal, Network, Code2, Server } from "lucide-vue-next";

import { socialMedia } from "../data/social-media";
import { highlights } from "../data/highlights";

/*
|--------------------------------------------------------------------------
| Formulario
|--------------------------------------------------------------------------
*/

const form = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

/*
|--------------------------------------------------------------------------
| Estados del formulario
|--------------------------------------------------------------------------
*/

const sending = ref(false);
const success = ref(false);
const error = ref(false);

/*
|--------------------------------------------------------------------------
| Enviar formulario
|--------------------------------------------------------------------------
*/

const sendEmail = async () => {
    // Evitar múltiples envíos
    if (sending.value) {
        return;
    }

    sending.value = true;

    success.value = false;
    error.value = false;

    try {
        const response = await fetch("https://formspree.io/f/mkjgjbdr", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },

            body: JSON.stringify({
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            }),
        });

        /*
            |--------------------------------------------------------------------------
            | Verificar respuesta de Formspree
            |--------------------------------------------------------------------------
            */

        if (!response.ok) {
            const data = await response.json().catch(() => null);

            console.error("Error de Formspree:", data);

            throw new Error("No se pudo enviar el formulario");
        }

        /*
            |--------------------------------------------------------------------------
            | Envío correcto
            |--------------------------------------------------------------------------
            */

        success.value = true;

        /*
            |--------------------------------------------------------------------------
            | Limpiar formulario
            |--------------------------------------------------------------------------
            */

        form.name = "";
        form.email = "";
        form.subject = "";
        form.message = "";

        console.log("Mensaje enviado correctamente");
    } catch (err) {
        console.error("Error al enviar:", err);

        error.value = true;
    } finally {
        sending.value = false;
    }
};
</script>

<template>
    <section class="about-view">
        <!--
        ============================================================
        PROFILE
        ============================================================
        -->

        <div class="about-profile">
            <div class="about-avatar animationMain">
                <img src="https://avatars.githubusercontent.com/u/95943337?s=400&u=04f08459968c76b4813a5efdd9a224729697ad4c&v=4"
                    alt="Foto de perfil" />
            </div>

            <h2>Leonardo Covarrubias Lemus</h2>

            <p class="role animationMain">Junior Developer / IT Support</p>

            <p class="description animationMain">
                Portafolio técnico interactivo diseñado para mostrar conocimientos
                prácticos en programación, redes, infraestructura y soporte TI.
            </p>

            <div class="about-social-media">
                <a v-for="social in socialMedia" :key="social.name" :href="social.url" :aria-label="social.name"
                    target="_blank" rel="noopener noreferrer" class="social-link">
                    <component :is="social.icon" :size="24" :stroke-width="1.8" />
                </a>
            </div>
        </div>

        <!--
        ============================================================
        FOCUS AREAS
        ============================================================
        -->

        <section class="about-section">
            <div class="section-title">
                <User :size="17" />

                <h3>Focus Areas</h3>
            </div>

            <div class="highlights">
                <article v-for="item in highlights" :key="item.title" class="highlight">
                    <component :is="item.icon" :size="19" />

                    <div>
                        <strong>
                            {{ item.title }}
                        </strong>

                        <p>
                            {{ item.description }}
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <!--
        ============================================================
        CONTACT
        ============================================================
        -->

        <section class="contact-me">
            <div class="section-title">
                <Terminal :size="17" />

                <h3>Contact Me</h3>
            </div>

            <p class="description animationMain">
                Si deseas contactarme, completa el siguiente formulario y me pondré en
                contacto contigo.
            </p>

            <!-- ============================================================ 
             CONTACTO DIRECTO ============================================================ -->
            <h4>Contacto Directo</h4>
            <div class="direct-contact animationMain">
                <a href="mailto:leonardocovarrubias313@gmail.com" class="email-button">
                    <Terminal :size="16" /> Contactarme por correo
                </a>
            </div>

            <!--
            ========================================================
            SUCCESS MESSAGE
            ========================================================
            -->

            <div v-if="success" class="form-success">
                ✓ Mensaje enviado correctamente. Me pondré en contacto contigo.
            </div>

            <!--
            ========================================================
            ERROR MESSAGE
            ========================================================
            -->

            <div v-if="error" class="form-error">
                ✕ No se pudo enviar el mensaje. Inténtalo nuevamente.
            </div>

            <!--
            ========================================================
            FORM
            ========================================================
            -->
            <h4>Formulario de Contacto</h4>
            <form id="contact-form" class="contact-form" @submit.prevent="sendEmail">
                <!-- NAME -->

                <div class="form-group">
                    <label for="name"> Nombre </label>

                    <input id="name" name="name" v-model="form.name" type="text" placeholder="Tu nombre"
                        autocomplete="name" required class="animationMain" />
                </div>

                <!-- EMAIL -->

                <div class="form-group">
                    <label for="email"> Correo electrónico </label>

                    <input id="email" name="email" v-model="form.email" type="email" placeholder="tu@email.com"
                        autocomplete="email" class="animationMain" required />
                </div>

                <!-- SUBJECT -->

                <div class="form-group">
                    <label for="subject"> Asunto </label>

                    <input id="subject" name="subject" v-model="form.subject" type="text"
                        placeholder="Asunto del mensaje" class="animationMain" required />
                </div>

                <!-- MESSAGE -->

                <div class="form-group">
                    <label for="message"> Mensaje </label>

                    <textarea id="message" name="message" v-model="form.message" rows="6"
                        placeholder="Escribe tu mensaje..." class="animationMain" required></textarea>
                </div>

                <!-- BUTTON -->

                <button type="submit" class="send-button animationMain" :disabled="sending">
                    <Terminal :size="16" />

                    {{ sending ? "Enviando..." : "Enviar mensaje" }}
                </button>
            </form>
        </section>

        <!--
        ============================================================
        FOOTER
        ============================================================
        -->

        <footer class="about-footer">
            <Terminal :size="15" />

            <span> leonardo@it-lab </span>
        </footer>
    </section>
</template>

<style lang="css" scoped>
/* ==========================================================================
   ABOUT VIEW
   ========================================================================== */

.about-view {
    width: 100%;
    height: 100%;
    min-height: 0;

    display: flex;
    flex-direction: column;

    padding: 24px;

    overflow-y: auto;

    background: #0f172a;
    color: #cbd5e1;

    animation: highlightAppear 0.55s ease forwards;
}

/* ==========================================================================
   PROFILE
   ========================================================================== */

.about-profile {
    margin-bottom: 25px;

    text-align: center;
}

.about-avatar {
    width: 88px;
    height: 88px;

    display: grid;
    place-items: center;

    margin: 0 auto 12px;

    overflow: hidden;

    border-radius: 16px;

    background: #1e293b;
}

.about-avatar img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;
}

.about-profile h2 {
    margin: 0;

    color: #f8fafc;

    font-size: 21px;
}

.role {
    margin: 5px 0;

    color: #93c5fd;

    font-size: 12px;
}

.description {
    max-width: 480px;

    margin: 12px auto 0;

    color: #94a3b8;

    font-size: 12px;
    line-height: 1.7;
}

/* ==========================================================================
   SOCIAL MEDIA
   ========================================================================== */

.about-social-media {
    display: inline-flex;
    align-items: center;

    gap: 12px;

    margin-top: 20px;
}

.social-link {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #333;
    border-radius: 10px;

    color: #aaa;
    text-decoration: none;

    transition:
        color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease,
        background 0.25s ease;
}

.social-link:hover {
    color: white;

    border-color: #666;

    background: #1a1a1a;

    transform: translateY(-3px);
}

/* ==========================================================================
   ABOUT SECTION
   ========================================================================== */

.about-section {
    margin-bottom: 20px;
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

/* ==========================================================================
   HIGHLIGHTS
   ========================================================================== */

.highlights {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

    gap: 9px;
}

/* ==========================================================================
   HIGHLIGHT CARD
   ========================================================================== */

.highlight {
    position: relative;

    display: flex;
    align-items: flex-start;

    gap: 10px;

    padding: 12px;

    overflow: hidden;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111827;
    color: #93c5fd;

    cursor: default;

    /* Initial animation */
    opacity: 0;
    transform: translateY(10px);

    animation: highlightAppear 0.55s ease forwards;

    /* Hover transition */
    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
}

/* ==========================================================================
   HIGHLIGHT CARD - ANIMATION DELAY
   ========================================================================== */

.highlight:nth-child(1) {
    animation-delay: 0.05s;
}

.highlight:nth-child(2) {
    animation-delay: 0.12s;
}

.highlight:nth-child(3) {
    animation-delay: 0.19s;
}

.highlight:nth-child(4) {
    animation-delay: 0.26s;
}

.highlight:nth-child(5) {
    animation-delay: 0.33s;
}

.highlight:nth-child(6) {
    animation-delay: 0.4s;
}

/* ==========================================================================
   HIGHLIGHT CARD - HOVER
   ========================================================================== */

.highlight:hover {
    border-color: #3b82f6;

    background: #131e31;

    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(59, 130, 246, 0.08);

    transform: translateY(-4px);
}

/* ==========================================================================
   HIGHLIGHT CARD - SHINE EFFECT
   ========================================================================== */

.highlight::before {
    content: "";

    position: absolute;
    top: 0;
    left: -120%;

    width: 80%;
    height: 100%;

    background: linear-gradient(90deg,
            transparent,
            rgba(147, 197, 253, 0.08),
            transparent);

    transform: skewX(-20deg);

    transition: left 0.6s ease;

    pointer-events: none;
}

.highlight:hover::before {
    left: 140%;
}

/* ==========================================================================
   HIGHLIGHT CARD - TITLE
   ========================================================================== */

.highlight strong {
    color: #f8fafc;

    font-size: 11px;

    transition:
        color 0.25s ease,
        transform 0.25s ease;
}

.highlight:hover strong {
    color: #93c5fd;

    transform: translateX(2px);
}

/* ==========================================================================
   HIGHLIGHT CARD - DESCRIPTION
   ========================================================================== */

.highlight p {
    margin: 4px 0 0;

    color: #64748b;

    font-size: 10px;
    line-height: 1.5;

    transition: color 0.25s ease;
}

.highlight:hover p {
    color: #94a3b8;
}

/* ==========================================================================
   HIGHLIGHT CARD - ENTRY ANIMATION
   ========================================================================== */

@keyframes highlightAppear {
    from {
        opacity: 0;

        transform: translateY(10px) scale(0.98);
    }

    to {
        opacity: 1;

        transform: translateY(0) scale(1);
    }
}

/* ==========================================================================
   REDUCED MOTION
   ========================================================================== */

@media (prefers-reduced-motion: reduce) {
    .highlight {
        opacity: 1;

        transform: none;

        animation: none;
        transition: none;
    }

    .highlight::before {
        display: none;
    }
}

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */

.contact-form {
    display: flex;
    flex-direction: column;

    gap: 18px;

    margin-top: 25px;
}

.form-group {
    display: flex;
    flex-direction: column;

    gap: 7px;
}

.form-group label {
    font-size: 14px;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;

    padding: 12px 14px;

    border: 1px solid #333;
    border-radius: 6px;

    outline: none;

    background: #111;
    color: #fff;

    font-family: inherit;
    font-size: 14px;

    transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #777;
}

.form-group textarea {
    min-height: 140px;

    resize: vertical;
}

/* ==========================================================================
   DIRECT CONTACT
   ========================================================================== */

.direct-contact {
    display: flex;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 25px;
}

.email-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 11px 18px;

    border: 1px solid #334155;
    border-radius: 6px;

    background: #111827;
    color: #cbd5e1;

    font-size: 13px;
    font-weight: 600;

    text-decoration: none;

    cursor: pointer;

    transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

.email-button:hover {
    border-color: #64748b;

    background: #1e293b;

    transform: translateY(-2px);
}

/* ==========================================================================
   SEND BUTTON
   ========================================================================== */

.send-button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 12px 18px;

    border: none;
    border-radius: 6px;

    background: #fff;
    color: #111;

    font-weight: 600;

    cursor: pointer;

    transition: 0.2s ease;
}

.send-button:hover:not(:disabled) {
    opacity: 0.9;

    transform: translateY(-2px);
}

.send-button:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
}

/* ==========================================================================
   FORM SUCCESS
   ========================================================================== */

.form-success {
    margin-top: 20px;
    margin-bottom: 15px;

    padding: 12px 14px;

    border: 1px solid #166534;
    border-radius: 6px;

    background: #052e16;
    color: #86efac;

    font-size: 13px;
}

/* ==========================================================================
   FORM ERROR
   ========================================================================== */

.form-error {
    margin-top: 20px;
    margin-bottom: 15px;

    padding: 12px 14px;

    border: 1px solid #991b1b;
    border-radius: 6px;

    background: #450a0a;
    color: #fca5a5;

    font-size: 13px;
}

/* ==========================================================================
   FOOTER
   ========================================================================== */

.about-footer {
    display: flex;
    align-items: center;

    gap: 7px;

    margin-top: auto;
    padding-top: 15px;

    border-top: 1px solid #263241;

    color: #64748b;

    font-family: monospace;
    font-size: 10px;
}
</style>
