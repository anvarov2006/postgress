import { writeFile } from 'fs';
import fs from 'fs/promises';
import {join} from 'path';
const FILE_PATH = join(process.cwd(), '/src/data/users.json');
async function getData() {
const data =await fs.readFile(FILE_PATH,'utf-8')
return JSON.parse(data)
}
async function setData(data) {
try {
    await fs.writeFile(FILE_PATH,JSON.stringify(data,null,2), 'utf-8');
    
}catch(err){
    console.log(`Error is on setData function err:${err.message}`);
}
}
export{
    getData,setData
}