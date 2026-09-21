export const pingHost = async (host) => {
    return {
        success: true,

        host,

        packetsSent: 4,

        packetsReceived: 4,

        packetLoss: 0,

        latency: '2 ms'
    }
}

export const lookupDns = async (
    hostname
) => {
    return {
        success: true,

        hostname,

        address: '142.250.72.14',

        server: '8.8.8.8'
    }
}

export const checkPorts = async (
    host,
    ports = [22, 80, 443]
) => {
    return {
        success: true,

        host,

        ports: ports.map(port => ({
            port,

            service:
                port === 22
                    ? 'SSH'
                    : port === 80
                        ? 'HTTP'
                        : port === 443
                            ? 'HTTPS'
                            : 'UNKNOWN',

            status: 'open'
        }))
    }
}

export const scanNetwork = async (
    network
) => {
    return {
        success: true,

        network,

        hosts: [
            {
                ip: '192.168.1.1',
                hostname: 'router',
                status: 'online'
            },
            {
                ip: '192.168.1.10',
                hostname: 'linux-server',
                status: 'online'
            },
            {
                ip: '192.168.1.20',
                hostname: 'database',
                status: 'online'
            },
            {
                ip: '192.168.1.100',
                hostname: 'workstation',
                status: 'online'
            }
        ]
    }
}

export const getNetworkStatus = async () => {
    return {
        status: 'online',

        ip: '192.168.1.100',

        gateway: '192.168.1.1',

        dns: '8.8.8.8'
    }
}