import { Router } from 'express';

const router = Router();

router.get('/', listarCategorias);

router.get('/nova',cadastrarCategoria);

router.post('/', salvarCategoria);

export default router;