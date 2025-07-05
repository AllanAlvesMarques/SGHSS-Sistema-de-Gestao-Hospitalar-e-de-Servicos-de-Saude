import express from 'express';
import { criarPrescricao, listarPrescricoes } from '../controllers/prescricao.controller.js';
import { autenticar } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', autenticar, criarPrescricao);
router.get('/', autenticar, listarPrescricoes);

export default router;
