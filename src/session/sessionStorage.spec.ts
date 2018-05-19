import SessionStorage from './sessionStorage'
import ClientSessionInterface from './clientSession.interface'

let sessionStorage: SessionStorage = null,
    clientSessionMock = jest.fn<ClientSessionInterface>((id) => ({
        getId: function() {
            return id
        }
    })),
    sessionMocks: Array<ClientSessionInterface> = []

beforeEach(() => {
    sessionStorage = new SessionStorage()
    sessionMocks = [
        new clientSessionMock('0'),
        new clientSessionMock('1'),
        new clientSessionMock('2')
    ]

    sessionStorage.storeClient(sessionMocks[0])
})

it('should store the session', () => {
    const choosenSession = sessionMocks[1]
    sessionStorage.storeClient(choosenSession)

    expect(sessionStorage.retrieveClientById(choosenSession.getId()))
        .toBe(choosenSession)
})

it('should remove the stored session', () => {
    const choosenSession = sessionMocks[0]

    expect(sessionStorage.retrieveClientById(choosenSession.getId()))
        .toBeTruthy()

    sessionStorage.removeClientById(choosenSession.getId())

    expect(sessionStorage.retrieveClientById(choosenSession.getId()))
        .toBeNull()
})

it('should throw a error when trying to store a client with the same id', () => {
    const choosenSession = sessionMocks[0]
    expect(() => sessionStorage.storeClient(choosenSession))
        .toThrowError('Client with same id has already been stored')
})
