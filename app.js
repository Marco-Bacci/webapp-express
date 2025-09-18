const express = require("express");
const connection = require('./data/db')
const app = express();

const port = process.env.PORT;

app.use(express.static('public'))

// rotta base
app.get('/',(req,res)=>{
  res.send("rotta base del mio blog")
})

app.listen(port, ()=>{
  console.log(`server in ascolta sulla porta ${port}`)
})
