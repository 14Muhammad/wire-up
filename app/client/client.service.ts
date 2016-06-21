import { Injectable } from '@angular/core';
export class Client {
    constructor(public id: number, public name: string) { }
}
let CLIENTS = [
    new Client(99, 'Ahmad Bawajih'),
    new Client(65, 'Sara'),
    new Client(32, 'Stack'),
    new Client(54, 'Ali'),
    new Client(21, 'Muhammad'),
    new Client(12, 'John')
];
let clientsPromise = Promise.resolve(CLIENTS);
@Injectable()
export class ClientService {
    getClients() { return clientsPromise; }
    getClient(id: number | string) {
        return clientsPromise
            .then(clients => clients.filter(h => h.id === +id)[0]);
    }
}
