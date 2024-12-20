import express from 'express';
import cors from 'cors';
import users from './routes/users'
import pistonAPI from  './routes/pistonAPI';
import challenges from './routes/problems';
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/auth',users);
app.use('/execute',pistonAPI)
app.use('/problems',challenges);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}...`);
})