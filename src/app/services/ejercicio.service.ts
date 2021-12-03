import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ejercicio } from '../models/ejercicio.model';

const baseURL= environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin':'*'} };
  }

  //Método GET
  traerEjercicios(){
    return this.http.get<Ejercicio[]>(`${baseURL}/ejercicios`, this.headers);
  }

  //Método POST
  guardarEjercicios(data:Ejercicio){
    return this.http.post(`${baseURL}/ejercicios`,data);
 }
}
