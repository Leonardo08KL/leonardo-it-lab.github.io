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

export const desktopIcons = [
    {
        type: 'about',
        title: 'desktop.about',
        icon: User
    },
    {
        type: 'cv',
        title: 'desktop.cv',
        icon: FileText
    },
    // {
    //     type: 'personal',
    //     title: 'desktop.personal',
    //     icon: UserRoundCheckIcon
    // },
    {
        type: 'projects',
        title: 'desktop.projects',
        icon: FolderGit2
    },
    {
        type: 'skills',
        title: 'desktop.skills',
        icon: Code2
    },
    {
        type: 'linux',
        title: 'desktop.linux',
        icon: Server
    },
    {
        type: 'terminal',
        title: 'desktop.terminal',
        icon: Terminal
    },
    {
        type: 'network',
        title: 'desktop.network',
        icon: Network
    },
    {
        type: 'hardware',
        title: 'desktop.hardware',
        icon: Cpu
    }
]