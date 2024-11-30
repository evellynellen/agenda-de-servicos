const express = require('express');  // Importando o Express
const app = express();               // Criando uma instância do Express

const PORT = 5000;                   // Definindo a porta que o servidor vai rodar

// Middleware para lidar com requisições em JSON
app.use(express.json());

// Rota básica de teste
app.get('/', (req, res) => {
    res.send("Servidor rodando!");
});

// Fazendo o servidor rodar na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const authRouters = require('./routes/authRoutes');

//Integrando as Rotas ao App
app.use('/api/auth', authRouters)

// adicionando um endpoint de cadastro 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// simulaçao de um banco de dados (substituir por um banco real mysql)
let users = [];

 // endpoint de cadastro
 app.post('/api/auth/register', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // validaçao
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.'});
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'As senhas não coincidem.'});
    }

    // verificar se o email já está cadastrado
    const existingUser = users.find(user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'E-mail já cadastrado.'});
    }

    // salvar o novo usuário
    user.push({ name, email, password});
    res.status(201).json({message: 'Usuário cadstrado com sucesso.'});
    });

// inicializaçao do servidor
app.listen(5000, () => {
    console.log('Servidor rodaando em https://localhost:5000');
});
