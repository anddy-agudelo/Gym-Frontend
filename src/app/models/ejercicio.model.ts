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
    maquina: Maquina;
  }

  interface Maquina{
    id: string;
    nombre_maq: string;
  }