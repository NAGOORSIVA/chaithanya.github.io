import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {
    private URL = 'http://api.nobelprize.org/v1/prize.json';
    constructor(private http: HttpClient) { }
    getNobleResults(){
        return this.http.get<any>(this.URL);
    }
}