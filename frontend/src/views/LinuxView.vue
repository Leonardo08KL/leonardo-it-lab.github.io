<script setup>
import {
    Terminal,
    Server,
    ShieldCheck,
    Activity,
    HardDrive,
    Network
} from 'lucide-vue-next'

const linuxTools = [
    {
        title: 'Terminal',
        description: 'Administración mediante línea de comandos.',
        icon: Terminal
    },
    {
        title: 'Services',
        description: 'Gestión de servicios mediante systemd.',
        icon: Server
    },
    {
        title: 'Security',
        description: 'Usuarios, permisos y configuración básica.',
        icon: ShieldCheck
    },
    {
        title: 'Monitoring',
        description: 'Supervisión de procesos y recursos.',
        icon: Activity
    },
    {
        title: 'Storage',
        description: 'Discos, particiones y sistemas de archivos.',
        icon: HardDrive
    },
    {
        title: 'Networking',
        description: 'Configuración y diagnóstico de interfaces.',
        icon: Network
    }
]

const commands = [
    'systemctl status',
    'ip addr',
    'df -h',
    'free -h',
    'ps aux',
    'ss -tulpn'
]
</script>

<template>
    <section class="linux-view">
        <header class="linux-header">
            <div class="linux-logo">
                🐧
            </div>

            <div>
                <h2>Linux Lab</h2>
                <p>
                    Administración y diagnóstico de sistemas Linux.
                </p>
            </div>

            <span class="linux-status">
                <span class="status-dot"></span>
                RUNNING
            </span>
        </header>

        <div class="linux-content">
            <section class="linux-section">
                <h3>Administration Areas</h3>

                <div class="linux-tools">
                    <article v-for="tool in linuxTools" :key="tool.title" class="linux-tool">
                        <div class="tool-icon">
                            <component :is="tool.icon" :size="20" />
                        </div>

                        <div>
                            <strong>{{ tool.title }}</strong>
                            <p>{{ tool.description }}</p>
                        </div>
                    </article>
                </div>
            </section>

            <section class="linux-section">
                <h3>Common Commands</h3>

                <div class="commands">
                    <code v-for="command in commands" :key="command">
            $ {{ command }}
          </code>
                </div>
            </section>

            <section class="linux-system">
                <div>
                    <span>Operating System</span>
                    <strong>Linux</strong>
                </div>

                <div>
                    <span>Shell</span>
                    <strong>bash</strong>
                </div>

                <div>
                    <span>User</span>
                    <strong>leonardo</strong>
                </div>

                <div>
                    <span>Access</span>
                    <strong>SSH</strong>
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped>
.linux-view {
    width: 100%;
    height: 100%;
    min-height: 0;

    padding: 20px;

    overflow-y: auto;

    background: #0f172a;
    color: #e2e8f0;
}

.linux-header {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-bottom: 22px;
}

.linux-logo {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border-radius: 10px;

    background: #111827;

    font-size: 25px;
}

.linux-header h2 {
    margin: 0 0 4px;

    color: #f8fafc;
    font-size: 21px;
}

.linux-header p {
    margin: 0;

    color: #94a3b8;
    font-size: 12px;
}

.linux-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    margin-left: auto;

    padding: 5px 9px;

    border: 1px solid #14532d;
    border-radius: 5px;

    color: #86efac;
    background: #052e16;

    font-size: 10px;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: currentColor;
}

.linux-section {
    margin-bottom: 20px;
}

.linux-section h3 {
    margin: 0 0 12px;

    color: #cbd5e1;
    font-size: 13px;
}

.linux-tools {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(190px, 1fr));

    gap: 10px;
}

.linux-tool {
    display: flex;
    gap: 12px;

    padding: 14px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #111827;
}

.tool-icon {
    width: 34px;
    height: 34px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 7px;

    background: #1e293b;
    color: #93c5fd;
}

.linux-tool strong {
    color: #f8fafc;
    font-size: 12px;
}

.linux-tool p {
    margin: 4px 0 0;

    color: #94a3b8;
    font-size: 11px;
    line-height: 1.5;
}

.commands {
    display: grid;
    gap: 7px;

    padding: 14px;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #080c11;
}

.commands code {
    color: #a7f3d0;
    font-family: monospace;
    font-size: 12px;
}

.linux-system {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(130px, 1fr));

    gap: 1px;

    overflow: hidden;

    border: 1px solid #263241;
    border-radius: 8px;

    background: #263241;
}

.linux-system div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 13px;

    background: #111827;
}

.linux-system span {
    color: #64748b;
    font-size: 10px;
}

.linux-system strong {
    color: #cbd5e1;
    font-size: 12px;
}
</style>