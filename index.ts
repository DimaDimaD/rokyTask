import express, { Express } from 'express';
import dotenv from 'dotenv';
import {router} from './routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});