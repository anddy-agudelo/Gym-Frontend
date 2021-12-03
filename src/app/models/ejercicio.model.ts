export interface Ejercicio {
    id: string;
    descripcion: string;
    lunes: boolean;
    martes: boolean;
    miercoles: boolean;
    jueves: boolean;
    viernes: boolean;
    sabado: boolean;
    domingo: boolean;
    maquina: infoMaquina;
  
  }
  interface infoMaquina{
    id: string;
    nombre_maq: string;
  }
