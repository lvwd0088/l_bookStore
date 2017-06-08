import {request} from '../utils';
import { config } from '../utils'

export async function query(params){
  return request(config.serverPath+'/users',{
    method:'get',
    data:params
  })
}
