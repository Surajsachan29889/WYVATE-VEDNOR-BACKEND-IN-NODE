import { test } from '../models/GETModel';
import { Request, Response } from 'express'

const runTest = async (req:Request, res:Response): Promise<any> => {
  try {
    const vendorId:string | undefined = req.query.vendorId as string;
    const result = await test(vendorId);
    res.status(200).send({success:true, data:result});
  } catch (error) {
    console.error("Error in runTest:", error);
    throw error;
  }
};

export default { runTest };
