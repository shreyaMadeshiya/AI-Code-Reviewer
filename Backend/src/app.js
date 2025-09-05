// const express = require ('express');
// const aiRoutes = require('./routes/ai.routes')

// const app=express()

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })
// app.use('/ai',aiRoutes)

// module.exports=app


const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/ai', aiRoutes);

module.exports = app;
