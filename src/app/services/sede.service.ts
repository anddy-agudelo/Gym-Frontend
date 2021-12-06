import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sede } from '../models/sede.model';

const baseURL= environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  get headers(){
    return { headers: { 'Authorization':this.getToken()} };
  }

  

  //Método GET
  traerSedes(){
    return this.http.get<Sede[]>(`${baseURL}/sedes`, this.headers);
  }

  //Método POST
  guardarSedes(data:Sede){
    return this.http.post(`${baseURL}/sedes`,data);
 }
}
