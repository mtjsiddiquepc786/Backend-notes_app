const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async(req,res)=>{

const result = await uploadFile(req.file.buffer)

const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
})
    return res.status(201).json({
    massage:"post successfull",
    post
})})

app.get("/posts", async(req,res)=>{
    
    const data = await postModel.find()

    res.status(200).json({
        massage:"data fatched successfully",
        posts: data
    })}) 

app.delete("/posts/:id", async(req,res)=>{
    const id = req.params.id
    const data = await postModel.findByIdAndDelete(id)

    res.status(200).json({
        massage:"data deleted successfully",
        caption : data.caption,
        ID : data._id,
        
    })})

module.exports = app;