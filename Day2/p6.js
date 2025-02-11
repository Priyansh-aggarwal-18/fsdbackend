const fs=require('fs');
fs.rmdir("mydir",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Directory deleted")
})