<!-- <script setup>
import { ref, computed, onMounted } from 'vue'
import {
  Terminal, Network, Server, FolderGit2, Wrench, FileText, User,
  Code2, Cpu, X, Minus, Maximize2, Wifi, ShieldCheck, Activity,
  HardDrive, ExternalLink, Mail, Github, Menu, Power, ChevronRight
} from 'lucide-vue-next'

const windows = ref([])
const zCounter = ref(10)
const startMenu = ref(false)
const apiStatus = ref('checking')

const skills = {
  'Programación': ['Java', 'Spring Boot', 'JavaScript', 'Vue', 'HTML5', 'CSS3', 'PHP', 'Laravel', 'C# / .NET', 'Visual Basic', 'SQL'],
  'Infraestructura': ['Linux', 'Windows', 'SSH', 'Nginx', 'Samba', 'Podman / Docker', 'Git', 'systemd'],
  'Redes': ['TCP/IP', 'IPv4', 'DNS', 'DHCP', 'HTTP/HTTPS', 'Routing', 'Firewall', 'Diagnóstico de red'],
  'Hardware': ['Armado de PC', 'Diagnóstico', 'RAM', 'SSD/HDD', 'BIOS/UEFI', 'Mantenimiento']
}

const projects = [
  {
    title: 'Leonardo IT Lab',
    tech: 'Vue 3 · Node.js · Express',
    description: 'Portafolio interactivo con escritorio Linux, terminal, laboratorios técnicos y API REST.',
    status: 'En desarrollo'
  },
  {
    title: 'Media Server',
    tech: 'Fedora · Nginx · Node.js · Vue · FFmpeg · HLS',
    description: 'Servidor multimedia para administrar y reproducir archivos de vídeo mediante HLS.',
    status: 'Proyecto'
  },
  {
    title: 'File Explorer',
    tech: 'Vue · Express · REST API',
    description: 'Administrador web de archivos con navegación, subida y visualización de contenido.',
    status: 'Proyecto'
  },
  {
    title: 'Linux Home Server',
    tech: 'Fedora · SSH · Nginx · Samba · Podman',
    description: 'Laboratorio doméstico para servicios web, almacenamiento, contenedores y administración remota.',
    status: 'Laboratorio'
  }
]

const terminalHistory = ref([
  'Leonardo IT Lab Terminal v1.0',
  'Escribe "help" para ver los comandos disponibles.',
  ''
])
const terminalInput = ref('')
const terminalEl = ref(null)

const windowDefs = {
  about: { title: 'About Me', icon: User, w: 680, h: 480 },
  terminal: { title: 'Terminal', icon: Terminal, w: 760, h: 500 },
  network: { title: 'Network Laboratory', icon: Network, w: 760, h: 560 },
  linux: { title: 'Linux Laboratory', icon: Server, w: 720, h: 540 },
  projects: { title: 'Projects', icon: FolderGit2, w: 760, h: 560 },
  skills: { title: 'Skills', icon: Code2, w: 760, h: 560 },
  hardware: { title: 'Hardware Lab', icon: Wrench, w: 700, h: 500 },
  cv: { title: 'Curriculum Vitae', icon: FileText, w: 700, h: 520 },
  contact: { title: 'Contact', icon: Mail, w: 620, h: 430 }
}

function openWindow(type) {
  const existing = windows.value.find(w => w.type === type)
  if (existing) {
    existing.minimized = false
    focusWindow(existing.id)
    return
  }
  const d = windowDefs[type]
  const offset = Math.min(windows.value.length * 28, 160)
  windows.value.push({
    id: Date.now() + Math.random(),
    type,
    title: d.title,
    icon: d.icon,
    x: 90 + offset,
    y: 70 + offset,
    w: d.w,
    h: d.h,
    minimized: false,
    maximized: false,
    z: ++zCounter.value
  })
  focusWindow(windows.value.at(-1).id)
}

function closeWindow(id) {
  windows.value = windows.value.filter(w => w.id !== id)
}

function minimizeWindow(w) {
  w.minimized = true
}

function maximizeWindow(w) {
  w.maximized = !w.maximized
}

function focusWindow(id) {
  const w = windows.value.find(x => x.id === id)
  if (w) w.z = ++zCounter.value
}

function runCommand(command) {
  const c = command.trim()
  if (!c) return
  terminalHistory.value.push(`leonardo@it-lab:~$ ${c}`)

  const commands = {
    help: [
      'Comandos disponibles:',
      '  about      Información profesional',
      '  skills     Tecnologías y áreas',
      '  projects   Proyectos del portafolio',
      '  network    Laboratorio de redes',
      '  linux      Administración Linux',
      '  servers    Servicios de servidor',
      '  hardware   Conocimientos de hardware',
      '  whoami     Usuario del laboratorio',
      '  status     Estado del laboratorio',
      '  clear      Limpiar terminal'
    ],
    whoami: ['leonardo'],
    about: [
      'LEONARDO COVARRUBIAS',
      'Junior Software Developer | IT Support / Infrastructure',
      '',
      'Ingeniero en Sistemas Computacionales.',
      'Interés profesional: desarrollo web, Linux, redes, servidores',
      'y soporte de infraestructura.'
    ],
    skills: [
      'PROGRAMACIÓN: Java · Spring Boot · JavaScript · Vue · PHP · SQL · .NET',
      'SISTEMAS: Linux · Windows · SSH · Nginx · systemd · Git · Podman',
      'REDES: TCP/IP · IPv4 · DNS · DHCP · HTTP/HTTPS · Routing · Firewall',
      'HARDWARE: diagnóstico · armado de PC · RAM · SSD/HDD · BIOS/UEFI'
    ],
    projects: projects.flatMap((p, i) => [`[0${i + 1}] ${p.title}`, `    ${p.tech}`]),
    network: [
      'NETWORK LAB',
      'Interface: Ethernet',
      'IPv4: 192.168.x.x (demo)',
      'Gateway: 192.168.x.1 (demo)',
      'Tools: ip · ping · ss · dig · nslookup · curl · traceroute',
      'Protocols: TCP/IP · DNS · DHCP · HTTP · HTTPS · SSH'
    ],
    linux: [
      'LINUX LAB',
      '✓ Users & Groups',
      '✓ Permissions',
      '✓ SSH',
      '✓ systemd',
      '✓ Nginx',
      '✓ Samba',
      '✓ Firewall',
      '✓ Storage',
      '✓ Logs',
      '✓ Bash automation'
    ],
    servers: [
      'SERVER LAB',
      'SSH       :22    READY',
      'HTTP      :80    READY',
      'HTTPS     :443   READY',
      'Samba     :445   READY',
      'API       :3000  READY'
    ],
    hardware: [
      'HARDWARE LAB',
      '✓ Armado y actualización de PCs',
      '✓ Diagnóstico de RAM y almacenamiento',
      '✓ Instalación de sistemas operativos',
      '✓ BIOS/UEFI',
      '✓ Mantenimiento preventivo',
      '✓ Diagnóstico de fallas'
    ],
    status: [
      'SYSTEM STATUS',
      'CPU       ███████░░░  DEMO',
      'RAM       ██████░░░░  DEMO',
      'NETWORK   ██████████  ONLINE',
      'API       ██████████  ONLINE'
    ]
  }

  if (c === 'clear') {
    terminalHistory.value = []
  } else if (commands[c]) {
    terminalHistory.value.push(...commands[c])
  } else {
    terminalHistory.value.push(`bash: ${c}: comando no encontrado. Escribe "help".`)
  }
  terminalHistory.value.push('')
  terminalInput.value = ''
  requestAnimationFrame(() => terminalEl.value?.scrollTo({ top: terminalEl.value.scrollHeight }))
}

async function checkApi() {
  try {
    const r = await fetch('/api/health')
    apiStatus.value = r.ok ? 'online' : 'offline'
  } catch {
    apiStatus.value = 'offline'
  }
}

onMounted(checkApi)

const desktopWindows = computed(() => windows.value.filter(w => !w.minimized))
</script>

<template>
  <div class="desktop" @click="startMenu = false">
    <header class="topbar">
      <button class="brand" @click.stop="startMenu = !startMenu">
        <span class="brand-mark">🐧</span>
        <strong>Leonardo IT Lab</strong>
      </button>

      <div class="top-status">
        <span><Activity :size="14" /> SYSTEM {{ apiStatus.toUpperCase() }}</span>
        <span>leonardo@it-lab</span>
        <span>{{ new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</span>
      </div>
    </header>

    <div v-if="startMenu" class="start-menu" @click.stop>
      <div class="menu-title">Leonardo IT Lab</div>
      <button @click="openWindow('terminal'); startMenu=false"><Terminal /> Terminal</button>
      <button @click="openWindow('network'); startMenu=false"><Network /> Network Lab</button>
      <button @click="openWindow('linux'); startMenu=false"><Server /> Linux Lab</button>
      <button @click="openWindow('projects'); startMenu=false"><FolderGit2 /> Projects</button>
      <button @click="openWindow('cv'); startMenu=false"><FileText /> CV</button>
    </div>

    <main class="desktop-area">
      <div class="desktop-icons">
        <button class="desktop-icon" @dblclick="openWindow('terminal')"><Terminal /><span>Terminal</span></button>
        <button class="desktop-icon" @dblclick="openWindow('network')"><Network /><span>Network</span></button>
        <button class="desktop-icon" @dblclick="openWindow('linux')"><Server /><span>Linux</span></button>
        <button class="desktop-icon" @dblclick="openWindow('projects')"><FolderGit2 /><span>Projects</span></button>
        <button class="desktop-icon" @dblclick="openWindow('skills')"><Code2 /><span>Skills</span></button>
        <button class="desktop-icon" @dblclick="openWindow('hardware')"><Wrench /><span>Hardware</span></button>
        <button class="desktop-icon" @dblclick="openWindow('cv')"><FileText /><span>CV</span></button>
        <button class="desktop-icon" @dblclick="openWindow('about')"><User /><span>About</span></button>
      </div>

      <section class="hero">
        <div class="hero-terminal">
          <div class="hero-line">Welcome to <span>Leonardo IT Lab</span></div>
          <div>Junior Software Developer · IT Support · Infrastructure</div>
          <div class="hero-muted">Explore the desktop to see projects, Linux, networking and technical skills.</div>
          <button class="primary-btn" @click="openWindow('terminal')"><Terminal :size="17" /> Open Terminal</button>
        </div>
      </section>

      <div
        v-for="w in desktopWindows"
        :key="w.id"
        class="window"
        :class="{ maximized: w.maximized }"
        :style="{ left: w.maximized ? '0px' : w.x + 'px', top: w.maximized ? '42px' : w.y + 'px', width: w.maximized ? '100%' : w.w + 'px', height: w.maximized ? 'calc(100% - 42px)' : w.h + 'px', zIndex: w.z }"
        @mousedown.stop="focusWindow(w.id)"
      >
        <div class="window-titlebar">
          <div class="window-title"><component :is="w.icon" :size="15" /> {{ w.title }}</div>
          <div class="window-controls">
            <button @click="minimizeWindow(w)"><Minus :size="14" /></button>
            <button @click="maximizeWindow(w)"><Maximize2 :size="13" /></button>
            <button class="close" @click="closeWindow(w.id)"><X :size="14" /></button>
          </div>
        </div>

        <div class="window-content">
          <template v-if="w.type === 'terminal'">
            <div class="terminal" ref="terminalEl">
              <div v-for="(line, i) in terminalHistory" :key="i" :class="{ prompt: line.startsWith('leonardo@') }">{{ line }}</div>
              <form class="terminal-form" @submit.prevent="runCommand(terminalInput)">
                <span>leonardo@it-lab:~$</span>
                <input v-model="terminalInput" autofocus autocomplete="off" spellcheck="false" />
              </form>
            </div>
          </template>

          <template v-else-if="w.type === 'about'">
            <div class="content-page">
              <div class="profile-head"><div class="avatar">LC</div><div><h1>Leonardo Covarrubias</h1><p>Junior Software Developer · IT Support / Infrastructure</p></div></div>
              <div class="grid-two">
                <article><h3>Perfil</h3><p>Ingeniero en Sistemas Computacionales orientado al desarrollo web, administración Linux, redes, servidores y soporte TI.</p></article>
                <article><h3>Objetivo</h3><p>Construir soluciones web y administrar infraestructura con enfoque en automatización, documentación y resolución de problemas.</p></article>
              </div>
              <h3>Áreas</h3>
              <div class="tag-list"><span v-for="s in ['Java','Spring Boot','JavaScript','Vue','Linux','Networking','Servers','SQL','Git','Nginx']" :key="s">{{ s }}</span></div>
            </div>
          </template>

          <template v-else-if="w.type === 'skills'">
            <div class="content-page"><h2>Technical Skills</h2>
              <div class="skill-group" v-for="(items, group) in skills" :key="group">
                <h3>{{ group }}</h3><div class="tag-list"><span v-for="s in items" :key="s">{{ s }}</span></div>
              </div>
            </div>
          </template>

          <template v-else-if="w.type === 'projects'">
            <div class="content-page"><h2>Projects</h2>
              <div class="project-card" v-for="p in projects" :key="p.title">
                <div class="project-top"><h3>{{ p.title }}</h3><span>{{ p.status }}</span></div>
                <p>{{ p.description }}</p><code>{{ p.tech }}</code>
              </div>
            </div>
          </template>

          <template v-else-if="w.type === 'network'">
            <div class="content-page">
              <h2><Network /> Network Laboratory</h2>
              <div class="network-diagram">
                <div class="node internet">INTERNET</div><ChevronRight class="arrow" />
                <div class="node router">ROUTER<br><small>192.168.x.1</small></div>
                <div class="connections">
                  <div class="node">Windows<br><small>Client</small></div>
                  <div class="node fedora">Fedora Server<br><small>Linux</small></div>
                  <div class="node">Laptop<br><small>Client</small></div>
                </div>
              </div>
              <div class="lab-grid">
                <article><h3><Wifi /> Diagnóstico</h3><p><code>ip addr</code> · <code>ip route</code> · <code>ping</code> · <code>traceroute</code></p></article>
                <article><h3><ShieldCheck /> Servicios</h3><p>DNS · DHCP · HTTP/HTTPS · SSH · Firewall</p></article>
                <article><h3><Activity /> Sockets</h3><p><code>ss -tulpn</code> · puertos TCP/UDP · estados de conexión</p></article>
              </div>
            </div>
          </template>

          <template v-else-if="w.type === 'linux'">
            <div class="content-page">
              <h2>Linux Laboratory</h2>
              <div class="linux-grid">
                <article v-for="item in [
                  ['Users & Permissions','useradd · passwd · chmod · chown'],
                  ['Services','systemctl · journalctl · systemd'],
                  ['Networking','ip · ss · ping · curl · dig'],
                  ['Web Server','Nginx · reverse proxy · logs'],
                  ['Storage','lsblk · mount · fstab · permissions'],
                  ['Containers','Podman · images · volumes · compose']
                ]" :key="item[0]"><h3>{{ item[0] }}</h3><code>{{ item[1] }}</code></article>
              </div>
            </div>
          </template>

          <template v-else-if="w.type === 'hardware'">
            <div class="content-page">
              <h2><Cpu /> Hardware Lab</h2>
              <div class="hardware-list">
                <div><HardDrive /><strong>Almacenamiento</strong><span>SSD/HDD, particiones, SMART y montaje.</span></div>
                <div><Cpu /><strong>Memoria</strong><span>Diagnóstico de RAM y compatibilidad.</span></div>
                <div><Wrench /><strong>Mantenimiento</strong><span>Limpieza, temperatura, pasta térmica y diagnóstico.</span></div>
                <div><ShieldCheck /><strong>BIOS/UEFI</strong><span>Arranque, configuración y detección de hardware.</span></div>
              </div>
            </div>
          </template>

          <template v-else-if="w.type === 'cv'">
            <div class="content-page cv-page">
              <h1>Leonardo Covarrubias Lemus</h1>
              <p><strong>Ingeniero en Sistemas Computacionales</strong> · Software Development · IT Support · Infrastructure</p>
              <hr />
              <h3>Perfil</h3><p>Desarrollo web, bases de datos, Linux, redes, servidores y soporte de infraestructura.</p>
              <h3>Tecnologías</h3><p>Java · Spring Boot · JavaScript · Vue · PHP · Laravel · SQL · Linux · Windows · Git · Docker/Podman · Nginx · SSH</p>
              <h3>Educación</h3><p>Ingeniería en Sistemas Computacionales — Instituto Tecnológico de México en Celaya.</p>
              <button class="primary-btn"><FileText :size="16" /> Descargar CV (añade tu PDF)</button>
            </div>
          </template>

          <template v-else-if="w.type === 'contact'">
            <div class="content-page contact-page">
              <h2>Contact</h2>
              <p>Encuéntrame en:</p>
              <a href="https://github.com/" target="_blank"><Github /> GitHub</a>
              <a href="mailto:tu-correo@example.com"><Mail /> tu-correo@example.com</a>
              <p class="hero-muted">Reemplaza estos enlaces con tus datos antes de publicar.</p>
            </div>
          </template>
        </div>
      </div>
    </main>

    <footer class="taskbar">
      <button class="launcher" @click.stop="startMenu = !startMenu"><Menu :size="18" /> <span>Applications</span></button>
      <div class="task-buttons">
        <button v-for="w in windows" :key="w.id" :class="{ active: !w.minimized }" @click="w.minimized = !w.minimized; focusWindow(w.id)">
          <component :is="w.icon" :size="15" /> {{ w.title }}
        </button>
      </div>
      <div class="task-right"><span class="green-dot"></span> IT LAB <Power :size="15" /></div>
    </footer>
  </div>
</template> -->


<script setup>
import Desktop from './components/desktop/Desktop.vue'
</script>

<template>
  <Desktop />
</template>