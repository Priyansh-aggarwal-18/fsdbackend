const fs=require('fs');
//read the data from file
fs.readFile("./data.txt","utf8",(err,data) => {
    if (err) throw err;
    console.log("Data Read from file:",data)
})