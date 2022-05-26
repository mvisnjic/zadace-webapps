import express from 'express';
import books from './books.js';

const app = express() // instanciranje aplikacije

const port = 3001 // port na kojem će web server slušati

app.get('/knjige', (req, res) => res.send(books))

app.listen(port, () => console.log(`Slušam na portu ${port}!`))