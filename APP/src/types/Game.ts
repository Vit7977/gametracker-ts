export interface Game {
  id?: number;
  titulo: string;
  capa: string;
  descricao?: string;
  data_lancamento: string;
  genero?: string;
  tempo_estimado?: number;
}
