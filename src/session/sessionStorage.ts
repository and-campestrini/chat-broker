import ClientSessionInterface from './clientSession.interface'
import SessionStorageInterface from './sessionStorage.Interface'
import ClientSessionListInterface from './clientSessionList.interface'

export default class SessionStorage implements SessionStorageInterface {
    private stored: ClientSessionListInterface = {}

    removeClientById(id: string) {
        this.removeFromStoredList(id)
    }

    retrieveClientById(id: string): ClientSessionInterface {
        if (!this.hasAlreadyBeenStored(id)) {
            return null
        }

        return this.getFromStoredList(id)
    }
    
    storeClient(clientSession: ClientSessionInterface): void {
        if (this.hasAlreadyBeenStored(clientSession.getId())) {
            throw new Error('Client with same id has already been stored')
        }

        this.addToStoredList(clientSession)
    }

    private removeFromStoredList(id: string) {
        delete this.stored[id]
    }

    private addToStoredList(clientSession: ClientSessionInterface): void {
        this.stored[clientSession.getId()] = clientSession
    }

    private getFromStoredList(id: string) {
        return this.stored[id]
    }

    private hasAlreadyBeenStored(id: string): boolean {
        return this.stored.hasOwnProperty(id)
    }
}
