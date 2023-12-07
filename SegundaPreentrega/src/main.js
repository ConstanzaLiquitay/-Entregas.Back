import express from 'express';
import {PORT} from './config'
import { apiRouter } from './routers/api.router';

import { MONGODB_CNX_STR } from './config.js'

await connect(MONGODB_CNX_STR)
console.log(`base de datos conectada`)

const app = express();
app.listen(PORT, () => {console.log('servidor escuchando en puerto ${PORT}')})

app.use('/api', apiRouter)

app.use('/static', express.static('./static'))