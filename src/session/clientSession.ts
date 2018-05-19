import * as WebSocket from 'ws'
import ClientSessionInterface from './clientSession.interface'

export default class ClientSession implements ClientSessionInterface {
    constructor(private id: string, private socket:WebSocket) {}

    setId(id: string):void {
        this.id = id
    }

    getId():string {
        return this.id
    }

    setSocket(socket:WebSocket):void {
        this.socket = socket
    }

    getSocket():WebSocket {
        return this.socket
    }
}
