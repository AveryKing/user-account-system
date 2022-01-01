const express = require('express');
import {Request, Response} from 'express';
import loginRouter from './controllers/login';
import userRouter from './controllers/user';
const mongoose = require('mongoose');

const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)

const connStr: string = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/account-system?retryWrites=true&w=majority';
mongoose.connect(connStr).then((_result: any) => {
    console.log('Connected to MongoDB')
})

app.get('/', (_req: Request, res: Response) => {
    res.send('wtf')
})


const PORT: number = 6969;
app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`)
})