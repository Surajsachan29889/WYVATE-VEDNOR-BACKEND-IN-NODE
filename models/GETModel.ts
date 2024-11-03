import { QueryArrayResult } from "pg";
import { query } from "../config/DBConfig";
import { activeStatus } from "../data/enum";
import Logger from '../utils/logger'

const test = async (vendorId:string) => {
  try{
    const res:QueryArrayResult<any> = await query(`SELECT * FROM vendor_vendormodel WHERE id = $1 and online = $2`,[vendorId,activeStatus.true]);
    return res.rows;
  }catch(err){
    Logger.error(err);
  }
};


export {
    test
}
