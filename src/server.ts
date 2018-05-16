import * as WebSocket from 'ws'
import {ConfigInterface} from './config'
import eventConstants from './events/constants'

export function bootstrap(config: ConfigInterface) {
    const options = {
        port: config.port
    }
    
    const server = new WebSocket.Server(options, () => {
        console.log('Server listening on port 8080')
    })
}
