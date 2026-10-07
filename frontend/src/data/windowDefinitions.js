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
        width: 50,
        height: 80
    },
    cv: {
        type: 'cv',
        title: 'desktop.cv',
        icon: FileText,
        width: 50,
        height: 80
    },
    terminal: {
        type: 'terminal',
        title: 'desktop.terminal',
        icon: Terminal,
        width: 50,
        height: 80
    },

    network: {
        type: 'network',
        title: 'desktop.network',
        icon: Network,
        width: 50,
        height: 80
    },

    linux: {
        type: 'linux',
        title: 'desktop.linux',
        icon: Server,
        width: 50,
        height: 80
    },

    projects: {
        type: 'projects',
        title: 'desktop.projects',
        icon: FolderGit2,
        width: 50,
        height: 80
    },

    skills: {
        type: 'skills',
        title: 'desktop.skills',
        icon: Code2,
        width: 50,
        height: 80
    },

    hardware: {
        type: 'hardware',
        title: 'desktop.hardware',
        icon: Cpu,
        width: 50,
        height: 80
    },



    // personal: {
    //     type: 'personal',
    //     title: 'Personal',
    //     icon: User,
    //     width: 500,
    //     height: 800
    // },

}