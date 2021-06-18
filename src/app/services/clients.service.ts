import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClient } from '../clients.model';

const headerOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _http:HttpClient) { }

  private _clientApi:string = "http://localhost:3000/Clients/";
  private _clientIllustrationApi:string = "http://localhost:3003/ClientIllustrations/";

 /* currentClient = {
    firstName: '',
    lastName: '',
    dob:'',
    email:'',
    privacy:''
  }*/

  getClients():Observable<IClient[]> {
    return this._http.get<IClient[]>(this._clientApi, headerOption);
  }

  getClientIllustrations():Observable<IClient[]> {
    return this._http.get<IClient[]>(this._clientIllustrationApi, headerOption);
  }

  getClientById(id:number):Observable<IClient[]> {
    return this._http.get<IClient[]>(this._clientApi + id);
  }

  deleteClient(id:number):Observable<IClient> {
    return this._http.delete<IClient>(this._clientApi, headerOption);
  }

  createClient(client:IClient):Observable<IClient> {
    return this._http.post<IClient>(this._clientApi, client);
  }

  updateClient(client:IClient):Observable<IClient> {
    return this._http.put<IClient>(this._clientApi + client.id, client);
  }

  clientApiError(error:HttpErrorResponse) {
    return Observable.throw(error.message || "SERVER ERROR")
  }

  clientIllustrationApiError(error:HttpErrorResponse) {
    return Observable.throw(error.message || "SERVER ERROR")
  }
}
