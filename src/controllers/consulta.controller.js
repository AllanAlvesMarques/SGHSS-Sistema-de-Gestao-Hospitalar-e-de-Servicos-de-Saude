let consultas = [];

export const agendarConsulta = (req, res) => {
  const { pacienteId, profissionalId, dataHora } = req.body;

  if (!pacienteId || !profissionalId || !dataHora) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const novaConsulta = {
    id: consultas.length + 1,
    pacienteId,
    profissionalId,
    dataHora,
    status: 'agendada'
  };

  consultas.push(novaConsulta);
  return res.status(201).json({ message: 'Consulta agendada com sucesso.', consulta: novaConsulta });
};

export const listarConsultas = (req, res) => {
  return res.json(consultas);
};