import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Maquina } from '../models/maquina.models';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class MaquinaService { 

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin':'*'} };
  }

  //Método GET
  traerMaquinas(){
    return this.http.get<Maquina[]>(`${baseURL}/maquinas`, this.headers);
  }
}

