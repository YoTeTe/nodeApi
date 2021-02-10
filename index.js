const express = require('express');
app = express()

app.use((req,res)=>{
  res.json({one:2,two:1,three:3,four:4})
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listning on port ${port} ...`))
