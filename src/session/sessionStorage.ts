import ClientSessionInterface from './clientSessionInterface'
import SessionStorageInterface from './sessionStorageInterface'
import ClientSessionListInterface from './clientSessionListInterface'

export class SessionStorage implements SessionStorageInterface {
    private stored: ClientSessionListInterface = {}

    removeClientById(id: string) {

    }

    retrieveClientById(id: string): ClientSessionInterface {
        if (!this.hasAlreadyBeenStored(id)) {
            return null
        }

        return this.getFromStoredList(id)
    }
    
    storeClient(clientSession: ClientSessionInterface): void {
        if (this.hasAlreadyBeenStored(clientSession.getId())) {
            return
        }

        this.addToStoredList(clientSession)
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
