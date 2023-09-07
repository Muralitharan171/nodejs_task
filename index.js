const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("timestamps"));

const dirPath = path.join(__dirname,"timestamps")
console.log("dirPath" , dirPath)

app.get("/static",(req,res)=>{
    const time = new Date();
    const dateString = time.toUTCString().slice(0,-3);
    const content = `Current timestamp is : ${dateString}`;
    fs.writeFileSync(`${dirPath}/date-time.txt`,content,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('file created')
        }
    })

    res.sendFile(path.join(__dirname , "timestamps/date-time.txt"))
})

app.listen(9000,()=>console.log("server started"))