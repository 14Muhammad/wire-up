import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Headers, Http} from "@angular/http";
export class Client {
    constructor(
        public id : string,
        public companyName : string,
        public address : string,
        public city: string,
        public state: string,
        public country: string,
        public phone: number,
        public online: boolean,
        public zip: number,
        public website: string,
        public VATNumber: string,
        public currency: string,
        public currencySymbol: string,
        public createdAt:string,
        public updatedAt:string
    ){}
}
@Injectable()
export class ClientService {
    constructor(private http: Http) {}
    public getClients() : Observable<Client[]> {
        let clientsPath = 'http://127.0.0.1:8081/wireup/clients';
        let heroes = this.http.get(clientsPath, {headers: this.getHeaders()})
            .map(res => <Client[]> res.json())
            .catch(this.handleError);
        return heroes;
    }

    public addClient(newClient) {
        var addClientPath = 'http://127.0.0.1:8081/wireup/client/add';
        return this.http.post(addClientPath, newClient,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public updateClient(id, updatedClient) {
        var addClientPath = 'http://127.0.0.1:8081/wireup/client/update/'+id;
        return this.http.put(addClientPath, updatedClient,{headers: this.getHeaders()})
            .catch(this.handleError);
    }

    public deleteClient(id) {
        var deleteClientPath = 'http://127.0.0.1:8081/wireup/client/delete/'+id;
        return this.http.delete(deleteClientPath,{headers: this.getHeaders()})
            .catch(this.handleError);
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private handleError (error: any) {
        let errorMsg = error.message || ` Problem in Projects retrieving`
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }

    
}
