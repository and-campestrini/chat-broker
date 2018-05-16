import * as dotenv from 'dotenv'

dotenv.config()

const env = process.env

const config:ConfigInterface = {
    port: parseInt(env.port) || 8080
}

export interface ConfigInterface {
    port: number
}

export default config
