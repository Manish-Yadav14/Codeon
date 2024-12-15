import express from 'express';
import cors from 'cors';
import users from './routes/users'
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/auth',users);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}...`);
})