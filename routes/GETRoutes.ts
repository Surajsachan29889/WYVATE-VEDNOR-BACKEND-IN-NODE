import express from 'express';
const app = express();

const router = express.Router();

import GETController from '../controllers/GETController';

router.get('/test',GETController.runTest);


export default router;


