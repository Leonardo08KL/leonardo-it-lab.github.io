export const terminalCommands = {
    help: () => [
        'Available commands:',
        '',
        '  help       Show available commands',
        '  whoami     Show current user',
        '  about      About Leonardo IT Lab',
        '  skills     Show technical skills',
        '  projects   Show projects',
        '  network    Show network information',
        '  linux      Show Linux information',
        '  servers    Show server information',
        '  hardware   Show hardware information',
        '  status     Show system status',
        '  clear      Clear terminal'
    ],

    whoami: () => [
        'leonardo',
        '',
        'Junior Developer / IT Support',
        'Web Development • Networks • Infrastructure'
    ],

    about: () => [
        'Leonardo IT Lab',
        '',
        'Interactive technical portfolio focused on:',
        '- Software development',
        '- IT support',
        '- Networks',
        '- Linux administration',
        '- Hardware maintenance'
    ],

    skills: () => [
        'Technical Skills',
        '',
        'Programming:',
        '  Java, JavaScript, HTML, CSS, PHP, .NET, Visual Basic',
        '',
        'Frontend:',
        '  Vue.js, Angular',
        '',
        'Infrastructure:',
        '  Windows Server, Linux, system administration',
        '',
        'Networks:',
        '  TCP/IP, LAN, troubleshooting, network administration'
    ],

    projects: () => [
        'Projects',
        '',
        '1. Leonardo IT Lab',
        '2. Media Server',
        '3. File Explorer',
        '4. Linux Home Server'
    ],

    network: () => [
        'Network Lab',
        '',
        'Network status: ONLINE',
        'Interface: eth0',
        'IP: 192.168.1.100',
        'Gateway: 192.168.1.1',
        'DNS: 8.8.8.8',
        '',
        'Connectivity: OK'
    ],

    linux: () => [
        'Linux Lab',
        '',
        'OS: Linux',
        'Shell: bash',
        'User: leonardo',
        'Status: RUNNING',
        '',
        'Available administration tools:',
        '- systemctl',
        '- journalctl',
        '- ip',
        '- ss',
        '- ping',
        '- top'
    ],

    servers: () => [
        'Server Infrastructure',
        '',
        'Windows Server: configured',
        'Linux Server: configured',
        'SSH: available',
        'Web Server: available',
        'File Server: available'
    ],

    hardware: () => [
        'Hardware Support',
        '',
        'Areas:',
        '- PC maintenance',
        '- Hardware diagnostics',
        '- Component replacement',
        '- Operating system installation',
        '- Driver management',
        '- Preventive maintenance'
    ],

    status: () => [
        'System Status',
        '',
        'Frontend: ONLINE',
        'Terminal: RUNNING',
        'Network: ONLINE',
        'API: CHECKING',
        '',
        'All local systems operational.'
    ]
}