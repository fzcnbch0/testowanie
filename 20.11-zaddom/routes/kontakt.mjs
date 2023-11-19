import express from 'express'
const router = express.Router();
import path from 'path'
import { __dirname } from '../dirname.mjs';
import { appendFile } from 'fs';

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/kontakt.html'));
    res.setHeader('content-type', 'text/html');
})

router.post('/', async (req, res) => {
    console.log(req.body)
    res.end("wyslano")
})

export { router as contactRouter} 