import ClientSessionInterface from './clientSession.interface'

export default interface SessionStorageInterface {
    removeClientById(id: string): void
    retrieveClientById(id: string): ClientSessionInterface
    storeClient(clientSession: ClientSessionInterface): void
}
