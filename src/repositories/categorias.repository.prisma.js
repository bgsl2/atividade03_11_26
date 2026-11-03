import { prisma } from '../config/database.js';

// REPOSITÓRIO de Categoria — a ÚNICA camada que conversa com o Prisma.
// Implemente os métodos que o service vai precisar:
//   - listar todas as categorias;
//   - buscar uma categoria por id (usado para checar se a categoria existe);
//   - criar uma categoria.
// Dica: use `prisma.categoria.*`. Tudo é assíncrono.
export class CategoriasRepositoryPrisma {
  // TODO: implemente os métodos descritos acima.
   
  async listar(){ 
    return await prisma.categorias.findMany()
  };
   async criar(nome){
     return await prisma.categorias.create({
      data:{
        nome: nome
        }
      }) 
    }
}
