import express from 'express';
import {
  cadastrarLeito,
  listarLeitos,
  internarPaciente,
  listarInternacoes,
  darAlta
} from '../controllers/leito.controller.js';
import { autenticar } from '../middlewares/auth.js';

const router = express.Router();

router.post('/leitos', autenticar, cadastrarLeito);
router.get('/leitos', autenticar, listarLeitos);
router.post('/internacoes', autenticar, internarPaciente);
router.get('/internacoes', autenticar, listarInternacoes);
router.put('/internacoes/:id/alta', autenticar, darAlta);

export default router;