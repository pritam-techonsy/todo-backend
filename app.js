require('dotenv').config();
const express = require('express');
const Groq = require('groq-sdk');
const app = express();
const PORT = 3000;

const client = new Groq({
    apiKey: process.env['GROQ_API_KEY'], // This is the default and can be omitted
});

app.use(express.json());

app.get('/hello', (req, res, next) => {
    res.status(200).json({
        msg: 'Hello World'
    });
});


app.post('/prompt', async (req, res, next) => {

    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: req.body.prompt }],
        model: 'llama3-8b-8192',
    });

    res.status(200).json({
        response: chatCompletion.choices[0].message.content
    });
});

app.listen(PORT, () => {
    console.log('Express server started on http://localhost:3000');
});