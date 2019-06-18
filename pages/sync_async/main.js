// fs module (file system module)

const fs = require('fs');
//async method
fs.readFile('../../read.txt','utf8',(error,responce) => {
    if(error) throw error;
    console.log(responce.toString());
})
console.log("hello");

//sync method
try{
  const data = fs.readFileSync('../../read.txt','utf8');
  console.log(data.toString())
}catch(e){

}
console.log("file read successfully");