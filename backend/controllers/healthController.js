export const getHealth = (req, res) => {
    res.json({
        status: 'ok',
        service: 'leonardo-it-lab-api',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    })
}