import * as WebSocket from 'ws'
import eventConstants from './eventConstants'

export function bootstrap() {
    const options = {
        port: 8080
    }
    
    const server = new WebSocket.Server(options, () => {
        console.log('Server listening on port 8080')
    })
}
