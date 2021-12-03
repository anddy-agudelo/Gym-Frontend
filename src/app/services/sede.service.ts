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

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin':'*'} };
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
