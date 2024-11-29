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