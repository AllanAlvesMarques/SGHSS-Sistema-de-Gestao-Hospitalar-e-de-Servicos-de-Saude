import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [];

export const signup = async (req, res) => {
  const {nome, email, senha, perfil } = req.body;
  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ error: 'Email já cadastrado' });

  const hashed = await bcrypt.hash(senha, 10);
  const newUser = { id: users.length + 1, nome, email, senha: hashed, perfil };
  users.push(newUser);
  res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};

export const login = async (req, res) => {
  const { email, senha } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const valid = await bcrypt.compare(senha, user.senha);
  if (!valid) return res.status(401).json({ error: 'Senha inválida' });

  const token = jwt.sign({ id: user.id, perfil: user.perfil }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
