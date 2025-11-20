export interface Versiculo {
  numero: number;
  texto: string;
  explicacao: string;
}

export interface Salmo {
  numero: number;
  titulo: string;
  reflexao: string;
  versiculos: Versiculo[];
}

export interface SalmosData {
  salmos: Salmo[];
}

export interface PalavraDoDia {
  salmo: Salmo;
  versiculo: Versiculo;
  expiresAt: number;
}
