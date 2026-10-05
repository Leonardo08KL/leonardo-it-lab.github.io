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
        title: 'About',
        icon: User,
        width: 700,
        height: 950
    },
    cv: {
        type: 'cv',
        title: 'CV',
        icon: FileText,
        width: 700,
        height: 600
    },
    terminal: {
        type: 'terminal',
        title: 'Terminal',
        icon: Terminal,
        width: 700,
        height: 450
    },

    network: {
        type: 'network',
        title: 'Network Lab',
        icon: Network,
        width: 800,
        height: 500
    },

    linux: {
        type: 'linux',
        title: 'Linux Lab',
        icon: Server,
        width: 750,
        height: 500
    },

    projects: {
        type: 'projects',
        title: 'Projects',
        icon: FolderGit2,
        width: 800,
        height: 550
    },

    skills: {
        type: 'skills',
        title: 'Skills',
        icon: Code2,
        width: 700,
        height: 500
    },

    hardware: {
        type: 'hardware',
        title: 'Hardware',
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