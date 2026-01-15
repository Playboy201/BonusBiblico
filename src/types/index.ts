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

export interface BlocoExplicacao {
  versiculos: string;
  titulo: string;
  explicacao: string;
}

export interface Proverbio {
  numero: number;
  titulo: string;
  intro: string;
  blocos: BlocoExplicacao[];
  sintese?: string[];
}

export interface ProverbiosData {
  proverbios: Proverbio[];
}

export interface Mateus {
  numero: number;
  titulo: string;
  intro: string;
  blocos: BlocoExplicacao[];
  sintese?: string[];
}

export interface MateusData {
  capitulos: Mateus[];
}

export interface Marcos {
  numero: number;
  titulo: string;
  intro: string;
  blocos: BlocoExplicacao[];
  sintese?: string[];
}

export interface MarcosData {
  capitulos: Marcos[];
}

export interface Lucas {
  numero: number;
  titulo: string;
  intro: string;
  blocos: BlocoExplicacao[];
  sintese?: string[];
}

export interface LucasData {
  capitulos: Lucas[];
}

export interface Joao {
  numero: number;
  titulo: string;
  intro: string;
  blocos: BlocoExplicacao[];
  sintese?: string[];
}

export interface JoaoData {
  capitulos: Joao[];
}

export interface VersiculoExplicado {
  id: number;
  referencia: string;
  texto: string;
  explicacao: string;
  tema?: string;
}

export interface AntigoTestamentoData {
  versiculos: VersiculoExplicado[];
}

export interface NovoTestamentoData {
  versiculos: VersiculoExplicado[];
}

export interface ColecaoOuroData {
  versiculos: VersiculoExplicado[];
}

export type Category = 'salmos' | 'proverbios' | 'mateus' | 'marcos' | 'lucas' | 'joao' | 'antigo-testamento' | 'novo-testamento' | 'colecao-ouro' | null;
