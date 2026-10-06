import {
    Terminal,
    Network,
    Server,
    FolderGit2,
    FileText,
    User,
    Code2,
    Cpu
} from 'lucide-vue-next'

export const windowDefinitions = {

    about: {
        type: 'about',
        title: 'desktop.about',
        icon: User,
        width: 70,
        height: 90
    },
    cv: {
        type: 'cv',
        title: 'desktop.cv',
        icon: FileText,
        width: 70,
        height: 90
    },
    terminal: {
        type: 'terminal',
        title: 'desktop.terminal',
        icon: Terminal,
        width: 70,
        height: 90
    },

    network: {
        type: 'network',
        title: 'desktop.network',
        icon: Network,
        width: 70,
        height: 90
    },

    linux: {
        type: 'linux',
        title: 'desktop.linux',
        icon: Server,
        width: 70,
        height: 90
    },

    projects: {
        type: 'projects',
        title: 'desktop.projects',
        icon: FolderGit2,
        width: 70,
        height: 90
    },

    skills: {
        type: 'skills',
        title: 'desktop.skills',
        icon: Code2,
        width: 70,
        height: 90
    },

    hardware: {
        type: 'hardware',
        title: 'desktop.hardware',
        icon: Cpu,
        width: 70,
        height: 90
    },



    // personal: {
    //     type: 'personal',
    //     title: 'Personal',
    //     icon: User,
    //     width: 700,
    //     height: 900
    // },

}