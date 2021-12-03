export interface Usuario {
  id: string;
  username: string;
  password: string;
  nombres: string;
  cedula: string;
  genero: string;
  correo: string;
  telefono: string;
  direccion: string;
  fecha_nacimiento: string;
  estatura: number;
  peso: number;
  ejercicio: Ejercicio;
  suscripcion: Suscripcion;
  sede: Sede;
  horario: string;
  hash: string;
}

interface Sede {
  id: string;
  nombre_sede: string;
  direccion: string;
}

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

export interface Maquina {
  id: string;
  nombre_maq: string;
}

export interface Suscripcion {
  id: string;
  tipo_suscrip: string;
  costo: string;
}