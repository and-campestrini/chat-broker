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
    expect(clientSession.getId()).toEqual(idMock)
})

it('should return an instance of WebSocket', () => {
    expect(clientSession.getSocket()).toBeInstanceOf(webSocket)    
})

it('should set the new id', () => {
    const newId = '38cc6252-5b6f-11e8-9c2d-fa7ae01bbebc'
    clientSession.setId(newId)
    expect(clientSession.getId()).toEqual(newId)
})

it('should set the new Websocket instance', () => {
    expect(clientSession.getSocket()).toBe(webSocketMock)
    const newWebSocketInstance = new webSocket()
    clientSession.setSocket(newWebSocketInstance)
    expect(clientSession.getSocket()).toBe(newWebSocketInstance)
})
