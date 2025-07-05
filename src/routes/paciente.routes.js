import express from 'express';
import { cadastrarPaciente, listarPacientes } from '../controllers/paciente.controller.js';
import { autenticar } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', autenticar, cadastrarPaciente);
router.get('/', autenticar, listarPacientes);

export default router;