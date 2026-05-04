export interface Game {
  id?: number;
  titulo: string;
  capa: string;
  descricao?: string;
  data_lancamento: Date;
  genero?: string;
  tempo_estimado?: number;
}
