import express from 'express';
import { agendarConsulta, listarConsultas } from '../controllers/consulta.controller.js';
import { autenticar } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', autenticar, agendarConsulta);
router.get('/', autenticar, listarConsultas);

export default router;