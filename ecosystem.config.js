module.exports = {
    apps: [
        {
            name: "ecommerce-server",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "ENVIRONMENT_VARIABLE_1"
            }
        }
    ]
}