const express = require('express')
const multer =require('multer')
const fs = require("fs")

const app = express();

app.post("/upload", (req,res)=>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, `${__dirname}/public`)
        },
        filename: function(req,file, cb){
            cb(null, Date.now()+".jpg");
        }
    })

    const upload = multer({storage}).single("file");

    upload(req,res, (error)=>{
        if(error instanceof multer.MulterError){
            return res.status(500).send(error)
        }else if(error){
            res.status(500).send(error)
        }

        console.log(req.file.filename)
        return res.status(200).send({message: "Upload realizado com sucesso"})
    })
})

app.listen(3005, ()=>{
    console.log("API rodando na porta 3005")
})