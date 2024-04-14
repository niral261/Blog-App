import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Router from './routes/route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', Router);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.m5zfyvi.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;

Connection(URL);
