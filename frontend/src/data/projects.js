import {
    Network,
    PenTool,
    User,
    ProjectorIcon
} from 'lucide-vue-next'

export const projects = [
    {
        id: 1,
        name: 'projects.items.itLab.name',
        category: 'projects.items.itLab.category',
        icon: ProjectorIcon,
        description: 'projects.items.itLab.description',
        technologies: [
            'Vue 3',
            'JavaScript',
            'Node.js',
            'Express',
            'HTML',
            'CSS'
        ],
        status: 'projects.status.inDevelopment'
    },

    {
        id: 2,
        name: 'projects.items.networkLab.name',
        category: 'projects.items.networkLab.category',
        icon: ProjectorIcon,
        description: 'projects.items.networkLab.description',
        technologies: [
            'Vue 3',
            'TCP/IP',
            'DNS',
            'HTTP',
            'Networking'
        ],
        status: 'projects.status.completed'
    },

    {
        id: 3,
        name: 'projects.items.linuxServer.name',
        category: 'projects.items.linuxServer.category',
        icon: ProjectorIcon,
        description: 'projects.items.linuxServer.description',
        technologies: [
            'Linux',
            'Bash',
            'SSH',
            'Networking',
            'Server Administration'
        ],
        status: 'projects.status.inDevelopment'
    },

    {
        id: 4,
        name: 'projects.items.mediaServer.name',
        category: 'projects.items.mediaServer.category',
        icon: ProjectorIcon,
        description: 'projects.items.mediaServer.description',
        technologies: [
            'Linux',
            'Storage',
            'Networking',
            'Server'
        ],
        status: 'projects.status.planned'
    },

    {
        id: 5,
        name: 'projects.items.itSupport.name',
        category: 'projects.items.itSupport.category',
        icon: ProjectorIcon,
        description: 'projects.items.itSupport.description',
        technologies: [
            'Hardware',
            'Windows',
            'Linux',
            'Troubleshooting'
        ],
        status: 'projects.status.planned'
    }
]