import { Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs-compat/Observable';

@Injectable()
export class PeticonesService{
public url: string;

constructor{
    public _http: HttpClient
}{
    this.url = "https://regres.in/";
}

getUser(user:any): Observable<any>
{
    return this._http.get(this.url+'api/users/'+userId);
}
    addUser(user): Observable<any>{
        let params = JSON.stringlfy(user);

        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url+'api/useres', params{headers: headers});
    }

    adUser(user:any): Observable<any>{
        
    }
}