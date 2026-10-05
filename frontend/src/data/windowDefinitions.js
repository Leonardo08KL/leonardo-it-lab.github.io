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
        width: 650,
        height: 750
    },
    cv: {
        type: 'cv',
        title: 'desktop.cv',
        icon: FileText,
        width: 700,
        height: 600
    },
    terminal: {
        type: 'terminal',
        title: 'desktop.terminal',
        icon: Terminal,
        width: 700,
        height: 450
    },

    network: {
        type: 'network',
        title: 'desktop.network',
        icon: Network,
        width: 800,
        height: 500
    },

    linux: {
        type: 'linux',
        title: 'desktop.linux',
        icon: Server,
        width: 750,
        height: 500
    },

    projects: {
        type: 'projects',
        title: 'desktop.projects',
        icon: FolderGit2,
        width: 800,
        height: 550
    },

    skills: {
        type: 'skills',
        title: 'desktop.skills',
        icon: Code2,
        width: 700,
        height: 500
    },

    hardware: {
        type: 'hardware',
        title: 'desktop.hardware',
        icon: Cpu,
        width: 700,
        height: 500
    },



    // personal: {
    //     type: 'personal',
    //     title: 'Personal',
    //     icon: User,
    //     width: 700,
    //     height: 600
    // },

}