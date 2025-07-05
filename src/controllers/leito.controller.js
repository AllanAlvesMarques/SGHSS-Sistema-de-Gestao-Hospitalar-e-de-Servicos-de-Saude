let leitos = [];
let internacoes = [];

export const cadastrarLeito = (req, res) => {
  const { numero, tipo, disponibilidade } = req.body;

  if (!numero || !tipo) {
    return res.status(400).json({ error: 'Número e tipo do leito são obrigatórios.' });
  }

  const existente = leitos.find(l => l.numero === numero);
  if (existente) {
    return res.status(409).json({ error: 'Leito já cadastrado com este número.' });
  }

  const novoLeito = {
    id: leitos.length + 1,
    numero,
    tipo,
    disponibilidade: disponibilidade ?? true
  };

  leitos.push(novoLeito);
  return res.status(201).json({ message: 'Leito cadastrado com sucesso.', leito: novoLeito });
};

export const listarLeitos = (req, res) => {
  return res.json(leitos);
};

export const internarPaciente = (req, res) => {
  const { pacienteId, leitoId, motivo } = req.body;

  const leito = leitos.find(l => l.id === leitoId && l.disponibilidade);
  if (!leito) {
    return res.status(400).json({ error: 'Leito indisponível ou inexistente.' });
  }

  const novaInternacao = {
    id: internacoes.length + 1,
    pacienteId,
    leitoId,
    motivo,
    dataEntrada: new Date().toISOString(),
    dataSaida: null
  };

  leito.disponibilidade = false;
  internacoes.push(novaInternacao);

  return res.status(201).json({ message: 'Paciente internado com sucesso.', internacao: novaInternacao });
};

export const listarInternacoes = (req, res) => {
  return res.json(internacoes);
};

export const darAlta = (req, res) => {
  const { id } = req.params;
  const internacao = internacoes.find(i => i.id === parseInt(id));

  if (!internacao || internacao.dataSaida) {
    return res.status(404).json({ error: 'Internação não encontrada ou já finalizada.' });
  }

  internacao.dataSaida = new Date().toISOString();
  const leito = leitos.find(l => l.id === internacao.leitoId);
  if (leito) leito.disponibilidade = true;

  return res.json({ message: 'Alta registrada com sucesso.', internacao });
};