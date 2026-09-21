<script setup>

import { reactive, ref } from 'vue'

import {
    User,
    Terminal,
    Network,
    Code2,
    Server
} from 'lucide-vue-next'


/*
|--------------------------------------------------------------------------
| Formulario
|--------------------------------------------------------------------------
*/

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})


/*
|--------------------------------------------------------------------------
| Estados del formulario
|--------------------------------------------------------------------------
*/

const sending = ref(false)
const success = ref(false)
const error = ref(false)


/*
|--------------------------------------------------------------------------
| Enviar formulario
|--------------------------------------------------------------------------
*/

const sendEmail = async () => {

    // Evitar múltiples envíos
    if (sending.value) {
        return
    }

    sending.value = true

    success.value = false
    error.value = false


    try {

        const response = await fetch(
            'https://formspree.io/f/mkjgjbdr',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message
                })
            }
        )


        /*
        |--------------------------------------------------------------------------
        | Verificar respuesta de Formspree
        |--------------------------------------------------------------------------
        */

        if (!response.ok) {

            const data = await response.json().catch(() => null)

            console.error(
                'Error de Formspree:',
                data
            )

            throw new Error(
                'No se pudo enviar el formulario'
            )
        }


        /*
        |--------------------------------------------------------------------------
        | Envío correcto
        |--------------------------------------------------------------------------
        */

        success.value = true


        /*
        |--------------------------------------------------------------------------
        | Limpiar formulario
        |--------------------------------------------------------------------------
        */

        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''


        console.log(
            'Mensaje enviado correctamente'
        )


    } catch (err) {

        console.error(
            'Error al enviar:',
            err
        )

        error.value = true


    } finally {

        sending.value = false

    }
}


/*
|--------------------------------------------------------------------------
| Áreas principales
|--------------------------------------------------------------------------
*/

const highlights = [

    {
        title: 'Development',
        description: 'Aplicaciones web y desarrollo frontend.',
        icon: Code2
    },

    {
        title: 'IT Support',
        description: 'Diagnóstico y mantenimiento de equipos.',
        icon: Terminal
    },

    {
        title: 'Networks',
        description: 'Redes, conectividad y troubleshooting.',
        icon: Network
    },

    {
        title: 'Infrastructure',
        description: 'Sistemas Linux, Windows y servidores.',
        icon: Server
    }

]

</script>


<template>

    <section class="about-view">


        <!--
        ============================================================
        PROFILE
        ============================================================
        -->

        <div class="about-profile">

            <div class="about-avatar">
                🐧
            </div>


            <h2>
                Leonardo
            </h2>


            <p class="role">
                Junior Developer / IT Support
            </p>


            <p class="description">

                Portafolio técnico interactivo diseñado para
                mostrar conocimientos prácticos en programación,
                redes, infraestructura y soporte TI.

            </p>

        </div>



        <!--
        ============================================================
        FOCUS AREAS
        ============================================================
        -->

        <section class="about-section">

            <div class="section-title">

                <User :size="17" />

                <h3>
                    Focus Areas
                </h3>

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

                <h3>
                    Contact Me
                </h3>

            </div>

            <p class="description">

                Si deseas contactarme, completa el siguiente
                formulario y me pondré en contacto contigo.

            </p>

            <!-- ============================================================ 
             CONTACTO DIRECTO ============================================================ -->
            <h4>Contacto Directo</h4>
            <div class="direct-contact"> <a href="mailto:leonardocovarrubias313@gmail.com" class="email-button">
                    <Terminal :size="16" /> Contactarme por correo
                </a> </div>


            <!--
            ========================================================
            SUCCESS MESSAGE
            ========================================================
            -->

            <div v-if="success" class="form-success">

                ✓ Mensaje enviado correctamente.
                Me pondré en contacto contigo.

            </div>



            <!--
            ========================================================
            ERROR MESSAGE
            ========================================================
            -->

            <div v-if="error" class="form-error">

                ✕ No se pudo enviar el mensaje.
                Inténtalo nuevamente.

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

                    <label for="name">
                        Nombre
                    </label>


                    <input id="name" name="name" v-model="form.name" type="text" placeholder="Tu nombre"
                        autocomplete="name" required />

                </div>



                <!-- EMAIL -->

                <div class="form-group">

                    <label for="email">
                        Correo electrónico
                    </label>


                    <input id="email" name="email" v-model="form.email" type="email" placeholder="tu@email.com"
                        autocomplete="email" required />

                </div>



                <!-- SUBJECT -->

                <div class="form-group">

                    <label for="subject">
                        Asunto
                    </label>


                    <input id="subject" name="subject" v-model="form.subject" type="text"
                        placeholder="Asunto del mensaje" required />

                </div>



                <!-- MESSAGE -->

                <div class="form-group">

                    <label for="message">
                        Mensaje
                    </label>


                    <textarea id="message" name="message" v-model="form.message" rows="6"
                        placeholder="Escribe tu mensaje..." required></textarea>

                </div>



                <!-- BUTTON -->

                <button type="submit" class="send-button" :disabled="sending">

                    <Terminal :size="16" />

                    {{
                        sending
                            ? 'Enviando...'
                            : 'Enviar mensaje'
                    }}

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

            <span>
                leonardo@it-lab
            </span>

        </footer>


    </section>

</template>



<style scoped>
/*
|--------------------------------------------------------------------------
| MAIN
|--------------------------------------------------------------------------
*/

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

}



/*
|--------------------------------------------------------------------------
| PROFILE
|--------------------------------------------------------------------------
*/

.about-profile {

    text-align: center;

    margin-bottom: 25px;

}


.about-avatar {

    width: 68px;
    height: 68px;

    display: grid;
    place-items: center;

    margin: 0 auto 12px;

    border-radius: 16px;

    background: #1e293b;

    font-size: 32px;

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



/*
|--------------------------------------------------------------------------
| ABOUT SECTION
|--------------------------------------------------------------------------
*/

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



/*
|--------------------------------------------------------------------------
| HIGHLIGHTS
|--------------------------------------------------------------------------
*/

.highlights {

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

    gap: 9px;

}


.highlight {

    display: flex;
    align-items: flex-start;

    gap: 10px;

    padding: 12px;

    border: 1px solid #263241;

    border-radius: 8px;

    background: #111827;

    color: #93c5fd;

}


.highlight strong {

    color: #f8fafc;

    font-size: 11px;

}


.highlight p {

    margin: 4px 0 0;

    color: #64748b;

    font-size: 10px;

    line-height: 1.5;

}



/*
|--------------------------------------------------------------------------
| CONTACT FORM
|--------------------------------------------------------------------------
*/

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

    background: #111;

    color: #fff;

    font-family: inherit;

    font-size: 14px;

    outline: none;

    transition: border-color 0.2s ease;

}


.form-group input:focus,
.form-group textarea:focus {

    border-color: #777;

}


.form-group textarea {

    resize: vertical;

    min-height: 140px;

}



/*
|--------------------------------------------------------------------------
| SEND BUTTON
|--------------------------------------------------------------------------
*/

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

    transform: translateY(-2px);

    opacity: 0.9;

}


.send-button:disabled {

    opacity: 0.6;

    cursor: not-allowed;

    transform: none;

}



/*
|--------------------------------------------------------------------------
| SUCCESS
|--------------------------------------------------------------------------
*/

.form-success {

    margin-top: 20px;

    margin-bottom: 15px;

    padding: 12px 14px;

    border-radius: 6px;

    background: #052e16;

    border: 1px solid #166534;

    color: #86efac;

    font-size: 13px;

}



/*
|--------------------------------------------------------------------------
| ERROR
|--------------------------------------------------------------------------
*/

.form-error {

    margin-top: 20px;

    margin-bottom: 15px;

    padding: 12px 14px;

    border-radius: 6px;

    background: #450a0a;

    border: 1px solid #991b1b;

    color: #fca5a5;

    font-size: 13px;

}



/*
|--------------------------------------------------------------------------
| FOOTER
|--------------------------------------------------------------------------
*/

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
    background: #1e293b;
    border-color: #64748b;

    transform: translateY(-2px);
}
</style>