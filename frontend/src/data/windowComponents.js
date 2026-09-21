import Terminal from '../components/terminal/Terminal.vue'
import NetworkDiagram from '../components/network/NetworkDiagram.vue'
import ProjectList from '../components/projects/ProjectList.vue'

import LinuxView from '../views/LinuxView.vue'
import SkillsView from '../views/SkillsView.vue'
import HardwareView from '../views/HardwareView.vue'
import CVView from '../views/CVView.vue'
import AboutView from '../views/AboutView.vue'

export const windowComponents = {
    terminal: Terminal,
    network: NetworkDiagram,
    linux: LinuxView,
    projects: ProjectList,
    skills: SkillsView,
    hardware: HardwareView,
    cv: CVView,
    about: AboutView
}