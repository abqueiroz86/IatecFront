export interface Root {
  usuarioId: number
  eventoId: number
  evento: Evento
}

export interface Evento {
  id: number
  nome: string
  descricao: string
  local: string
  tipo: string
  dataHora: string
}
