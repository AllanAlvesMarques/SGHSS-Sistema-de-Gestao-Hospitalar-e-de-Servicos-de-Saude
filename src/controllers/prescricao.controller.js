let prescricoes = [];

export const criarPrescricao = (req, res) => {
  const { pacienteId, profissionalId, medicamentos, observacoes } = req.body;

  if (!pacienteId || !profissionalId || !medicamentos || medicamentos.length === 0) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios e medicamentos não pode estar vazio.' });
  }

  const novaPrescricao = {
    id: prescricoes.length + 1,
    pacienteId,
    profissionalId,
    medicamentos,
    observacoes,
    data: new Date().toISOString()
  };

  prescricoes.push(novaPrescricao);
  return res.status(201).json({ message: 'Prescrição registrada com sucesso.', prescricao: novaPrescricao });
};

export const listarPrescricoes = (req, res) => {
  return res.json(prescricoes);
};
