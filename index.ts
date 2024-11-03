import express, { Request, Response } from 'express'
import env from 'dotenv';
import Logger from './utils/logger'
import cors from 'cors';
import pool from './config/DBConfig'
import GETRoutes from './routes/GETRoutes';

env.config();
const app= express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  }));

const PORT = process.env.PORT || 2022

const testConnection = async () => {
    try {
      const client = await pool.connect(); // Attempt to connect
      Logger.info("Connected to the database successfully!");
      client.release(); // Release the client back to the pool
    } catch (error) {
      Logger.error("Database connection error:", error);
    }
  };
  
  // Call the testConnection function to log connection status
  testConnection();

app.use('/get', GETRoutes);  
app.get('/',(req:Request, res:Response)=>{
    res.send("Hello jai mata di server is working 🌞" )
})

app.listen(PORT, ()=>{
    Logger.http("Server listening on port: "+ PORT);
})