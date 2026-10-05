import {
    Terminal,
    Network,
    Server,
    FolderGit2,
    FileText,
    User,
    Code2,
    Cpu,
    UserRoundCheckIcon
} from 'lucide-vue-next'


export const applications = [
    {
        type: 'terminal',
        title: 'desktop.terminal',
        description: 'appDescription.terminal',
        icon: Terminal
    },
    {
        type: 'network',
        title: 'desktop.network',
        description: 'appDescription.network',
        icon: Network
    },
    {
        type: 'linux',
        title: 'desktop.linux',
        description: 'appDescription.linux',
        icon: Server
    },
    {
        type: 'projects',
        title: 'desktop.projects',
        description: 'appDescription.projects',
        icon: FolderGit2
    },
    {
        type: 'skills',
        title: 'desktop.skills',
        description: 'appDescription.skills',
        icon: Code2
    },
    {
        type: 'hardware',
        title: 'desktop.hardware',
        description: 'appDescription.hardware',
        icon: Cpu
    },
    {
        type: 'cv',
        title: 'desktop.cv',
        description: 'appDescription.cv',
        icon: FileText
    },
    {
        type: 'about',
        title: 'desktop.about',
        description: 'appDescription.about',
        icon: User
    },
    // {
    //     type: 'personal',
    //     title: 'desktop.personal',
    //     description: 'appDescription.personal',
    //     icon: User
    // }
]