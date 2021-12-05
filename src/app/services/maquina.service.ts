import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Maquina } from '../models/maquina.model';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class MaquinaService { 

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('hash') || ''
  }

  get headers(){
    return { headers: { 'Authorization':this.getToken()} };
  }

  

  //Método GET
  traerMaquinas(){
    return this.http.get<Maquina[]>(`${baseURL}/maquinas`, this.headers);
  }

    //Método POST
    guardarMaquinas(data:Maquina){
      return this.http.post(`${baseURL}/maquinas`,data);
   }
}
