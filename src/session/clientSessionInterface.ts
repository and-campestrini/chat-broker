import * as WebSocket from 'ws'

export default interface ClientSessionInterface {
    getId(): string
    getSocket(): WebSocket
}
