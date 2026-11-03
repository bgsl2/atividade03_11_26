import { Router } from 'express';

const router = Router();

router.get('/',listarProdutos);

router.get('/novo',criarProdutos);

router.post('/',salvarProdutos);

export default router;