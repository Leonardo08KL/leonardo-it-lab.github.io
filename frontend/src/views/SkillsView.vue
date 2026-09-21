<script setup>
const skillGroups = [
    {
        title: 'Programming',
        skills: [
            'Java',
            'JavaScript',
            'HTML',
            'CSS',
            'PHP',
            '.NET',
            'Visual Basic'
        ]
    },
    {
        title: 'Frontend',
        skills: [
            'Vue.js',
            'Angular',
            'Responsive Design',
            'REST APIs'
        ]
    },
    {
        title: 'Infrastructure',
        skills: [
            'Windows Server',
            'Linux',
            'Server Administration',
            'System Administration'
        ]
    },
    {
        title: 'Networks',
        skills: [
            'TCP/IP',
            'LAN',
            'DNS',
            'DHCP',
            'Network Troubleshooting'
        ]
    },
    {
        title: 'IT Support',
        skills: [
            'Hardware Diagnostics',
            'PC Maintenance',
            'Operating Systems',
            'Driver Management',
            'Troubleshooting'
        ]
    }
]
</script>

<template>
    <section class="skills-view">
        <header class="skills-header">
            <h2>Technical Skills</h2>

            <p>
                Tecnologías y áreas técnicas.
            </p>
        </header>

        <div class="skills-grid">
            <article v-for="group in skillGroups" :key="group.title" class="skill-group">
                <h3>{{ group.title }}</h3>

                <div class="skills">
                    <span v-for="skill in group.skills" :key="skill" class="skill">
                        {{ skill }}
                    </span>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.skills-view {
    width: 100%;
    height: 100%;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;
}

.skills-header {
    margin-bottom: 20px;
}

.skills-header h2 {
    margin: 0 0 5px;

    color: #f8fafc;
    font-size: 22px;
}

.skills-header p {
    margin: 0;

    color: #94a3b8;
    font-size: 13px;
}

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 14px;
}

.skill-group {
    padding: 16px;

    border: 1px solid #263241;
    border-radius: 9px;

    background: #111827;
}

.skill-group h3 {
    margin: 0 0 14px;

    color: #93c5fd;
    font-size: 14px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.skill {
    padding: 5px 8px;

    border-radius: 5px;

    background: #1e293b;
    color: #cbd5e1;

    font-size: 11px;
}
</style>