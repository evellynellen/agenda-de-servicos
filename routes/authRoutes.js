const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// rota para registro de usuario
router,post('register', async (req, res)=> {
    const { name, email, password, role } = req.body;
    try {
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).send('Usuário registrado com sucesso!');
    }   catch (err) {
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
});

// rota para login de usuario 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado'});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Senha incorreta' });


        //criando o token JWT
        const token = jwt.sign({ userId: user._id }, 'secrectkey', { expiresIn: '1h' });
        res.status(500).json({error: 'Erro de login'});
    }
});


module.exports = router;