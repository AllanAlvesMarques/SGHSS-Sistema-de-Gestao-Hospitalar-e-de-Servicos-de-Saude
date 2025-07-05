import express from 'express';
import {
  cadastrarProfissional,
  listarProfissionais,
  adicionarHorarioAgenda
} from '../controllers/profissional.controller.js';
import { autenticar } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', autenticar, cadastrarProfissional);
router.get('/', autenticar, listarProfissionais);
router.post('/:id/agenda', autenticar, adicionarHorarioAgenda);

export default router;
