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
        title: 'About',
        icon: User
    },
    {
        type: 'cv',
        title: 'CV',
        icon: FileText
    },
    {
        type: 'personal',
        title: 'Personal',
        icon: UserRoundCheckIcon
    },
    {
        type: 'projects',
        title: 'Projects',
        icon: FolderGit2
    },
    {
        type: 'skills',
        title: 'Skills',
        icon: Code2
    },
    {
        type: 'linux',
        title: 'Linux Lab',
        icon: Server
    },
    {
        type: 'terminal',
        title: 'Terminal',
        icon: Terminal
    },
    {
        type: 'network',
        title: 'Network Lab',
        icon: Network
    },
    {
        type: 'hardware',
        title: 'Hardware',
        icon: Cpu
    },
]