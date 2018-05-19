import * as WebSocket from 'ws'
import ClientSession from './clientSession'

let webSocket = jest.fn<WebSocket>(),
    webSocketMock: WebSocket = null,
    idMock: string = null,
    clientSession: ClientSession = null

beforeEach(() => {
    idMock = '3f9917f6-5afc-11e8-9c2d-fa7ae01bbebc'
    webSocketMock = new webSocket()
    clientSession = new ClientSession(idMock, webSocketMock)
})    

it('should return the correct id', () => {
    const clientSession = new ClientSession(idMock, webSocketMock)
    expect(clientSession.getId()).toEqual(idMock)
})

it('should return an instance of WebSocket', () => {
    const clientSession = new ClientSession(idMock, webSocketMock)
    expect(clientSession.getSocket()).toBeInstanceOf(webSocket)    
})
