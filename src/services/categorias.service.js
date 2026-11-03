import { AppError } from '../utils/appError.js';

// SERVIÇO de Categoria — REGRAS DE NEGÓCIO.
// Lance `new AppError(mensagem, status)` quando uma regra for violada.
//
// Regras:
//   - o nome da categoria é OBRIGATÓRIO (ex.: 400 se faltar).
// Métodos: criar e listar.
export class CategoriasService {
  constructor(categoriasRepository) {
    this.repo = categoriasRepository;
  }
  // TODO: criar(dados), listar().
 async listar(){
    return this.repository.listar()
 }

async criar({nome }){
      if (!nome) throw new AppError('Já existe', 400);
      const categoria = await this.repository.criar(nome)
      return categoria
  }
}
