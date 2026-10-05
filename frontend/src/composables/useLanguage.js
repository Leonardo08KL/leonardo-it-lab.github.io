// src/composables/useLanguage.js

import { computed, ref } from 'vue'

const language = ref(
    localStorage.getItem('desktop-language') || 'ES'
)

const translations = {
    ES: {
        // General
        language: 'ES',
        spanish: 'Español',
        english: 'Inglés',

        // Taskbar
        startMenu: 'Menú principal',
        changeToEnglish: 'Cambiar a inglés',
        changeToSpanish: 'Cambiar a español',
        online: 'EN LÍNEA',
        shutdown: 'Apagar',

        // Applications
        terminal: 'Terminal',
        network: 'Laboratorio de Red',
        linux: 'Laboratorio Linux',
        projects: 'Proyectos',
        cv: 'CV',
        about: 'Acerca de',

        // Desktop
        desktop: 'Escritorio',

        // Start Menu
        applications: 'Aplicaciones',
        system: 'Sistema',
        settings: 'Configuración',

        // Windows
        close: 'Cerrar',
        minimize: 'Minimizar',
        maximize: 'Maximizar'
    },

    EN: {
        // General
        language: 'EN',
        spanish: 'Spanish',
        english: 'English',

        // Taskbar
        startMenu: 'Main menu',
        changeToEnglish: 'Change to English',
        changeToSpanish: 'Change to Spanish',
        online: 'ONLINE',
        shutdown: 'Shutdown',

        // Applications
        terminal: 'Terminal',
        network: 'Network Lab',
        linux: 'Linux Lab',
        projects: 'Projects',
        cv: 'CV',
        about: 'About',

        // Desktop
        desktop: 'Desktop',

        // Start Menu
        applications: 'Applications',
        system: 'System',
        settings: 'Settings',

        // Windows
        close: 'Close',
        minimize: 'Minimize',
        maximize: 'Maximize'
    }
}

export function useLanguage() {

    const currentLanguage = computed(() => language.value)

    const isSpanish = computed(() => language.value === 'ES')

    const isEnglish = computed(() => language.value === 'EN')

    const t = (key) => {
        return translations[language.value]?.[key] ?? key
    }

    const changeLanguage = () => {

        language.value =
            language.value === 'ES'
                ? 'EN'
                : 'ES'

        localStorage.setItem(
            'desktop-language',
            language.value
        )
    }

    const setLanguage = (newLanguage) => {

        if (!['ES', 'EN'].includes(newLanguage)) {
            return
        }

        language.value = newLanguage

        localStorage.setItem(
            'desktop-language',
            language.value
        )
    }

    return {
        language: currentLanguage,
        isSpanish,
        isEnglish,
        t,
        changeLanguage,
        setLanguage
    }
}