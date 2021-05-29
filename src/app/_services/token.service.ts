import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';

const baseUrl = 'http://localhost:8080/api/tokens';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Token[]> {
    return this.http.get<Token[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${_id}`);
  }
}
