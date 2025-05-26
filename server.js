const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'carolinarlima@outlook.com',
      pass: 'jiuerdutkjovxpia'
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'carolinarlima@outlook.com',
      subject: `Nova mensagem de ${nome}`,
      text: mensagem
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));