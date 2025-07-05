let pacientes = [];

export const cadastrarPaciente = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, endereco } = req.body;

  if (!nome || !cpf) {
    return res.status(400).json({ error: 'Nome e CPF são obrigatórios.' });
  }

  const pacienteExistente = pacientes.find(p => p.cpf === cpf);
  if (pacienteExistente) {
    return res.status(409).json({ error: 'Paciente com este CPF já cadastrado.' });
  }

  const novoPaciente = {
    id: pacientes.length + 1,
    nome,
    cpf,
    data_nascimento,
    telefone,
    endereco
  };

  pacientes.push(novoPaciente);
  return res.status(201).json({ message: 'Paciente cadastrado com sucesso.', paciente: novoPaciente });
};

export const listarPacientes = (req, res) => {
  return res.json(pacientes);
};
