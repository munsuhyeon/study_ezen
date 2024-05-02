const express = require("express");
const path = require("path")
const port = 3000;
const app = express();
const defaultRoutes = require('./routes/default')
const restaurantRoutes = require('./routes/restaurant')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use('/',defaultRoutes)
app.use('/',restaurantRoutes)
app.use((req,res)=>{
    res.render('/404')
})
app.listen(port,()=>console.log(`${port}번으로 서버실행`))