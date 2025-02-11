const fs= require('fs');
fs.appendFile(".mydir/data.txt","I  am appended at the end of the file",(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Data appended succesfully");
})