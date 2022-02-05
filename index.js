const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())

app.post('/create',async(req,res) =>{
    const data = req.body;
    console.log("data",data);


    res.send({msg:'user added'})
})

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(40000,() => console.log("Up &Running *4000"));

