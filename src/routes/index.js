import express from 'express';
import authRoutes from './auth.routes.js';
import pacienteRoutes from './paciente.routes.js';
import consultaRoutes from './consulta.routes.js';
import profissionalRoutes from './profissional.routes.js';
import leitoRoutes from './leito.routes.js';
import prescricaoRoutes from './prescricao.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/consultas', consultaRoutes);
router.use('/profissionais', profissionalRoutes);
router.use('/hospital', leitoRoutes);
router.use('/prescricoes', prescricaoRoutes);

export default router;
