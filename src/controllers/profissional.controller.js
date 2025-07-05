let profissionais = [];

export const cadastrarProfissional = (req, res) => {
  const { nome, cpf, especialidade, crm, telefone } = req.body;

  if (!nome || !cpf || !especialidade || !crm) {
    return res.status(400).json({ error: 'Nome, CPF, especialidade e CRM são obrigatórios.' });
  }

  const existente = profissionais.find(p => p.cpf === cpf || p.crm === crm);
  if (existente) {
    return res.status(409).json({ error: 'Profissional já cadastrado com este CPF ou CRM.' });
  }

  const novo = {
    id: profissionais.length + 1,
    nome,
    cpf,
    especialidade,
    crm,
    telefone,
    agenda: []  // array de datas e horários disponíveis
  };

  profissionais.push(novo);
  return res.status(201).json({ message: 'Profissional cadastrado com sucesso.', profissional: novo });
};

export const listarProfissionais = (req, res) => {
  return res.json(profissionais);
};

export const adicionarHorarioAgenda = (req, res) => {
  const { id } = req.params;
  const { dataHora } = req.body;

  const profissional = profissionais.find(p => p.id === parseInt(id));
  if (!profissional) return res.status(404).json({ error: 'Profissional não encontrado.' });

  profissional.agenda.push(dataHora);
  return res.status(200).json({ message: 'Horário adicionado à agenda.', agenda: profissional.agenda });
};
