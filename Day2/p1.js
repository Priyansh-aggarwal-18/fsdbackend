const fs=require('fs');
const data="Iam new data";
fs.writeFile("./data.txt",data,(err) =>{
    if(err) throw err;
    console.log("file created succesfully;");
})