const express = require("express");

const app = express();

const port = 3000;

// rotta base
app.get('/',(req,res)=>{
  res.send("rotta base del mio blog")
})

app.listen(port, ()=>{
  console.log(`server in ascolta sulla porta ${port}`)
})
