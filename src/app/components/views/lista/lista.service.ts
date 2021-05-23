import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from './lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  findAll():Observable<Lista[]> {
    const url = `${this.baseUrl}/pessoa`
    return this.http.get<Lista[]>(url)
  }

  create(lista: Lista): Observable<Lista>{
    const url = `${this.baseUrl}/pessoa`
    return this.http.post<Lista>(url, lista);
  }
}
