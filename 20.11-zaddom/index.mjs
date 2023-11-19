import express from 'express'
import Path from 'path'
import {contactRouter} from "./routes/kontakt.mjs"
import { mainRouter } from './routes/mainPage.mjs';
import { apiRouter } from './routes/api.mjs';
import { __dirname } from './dirname.mjs';
import bodyParser from 'body-parser';
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.use('/static', express.static(Path.join(__dirname, 'public')))

app.use('/kontakt', contactRouter)
app.use('/', mainRouter)
app.use('/api', apiRouter)

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

