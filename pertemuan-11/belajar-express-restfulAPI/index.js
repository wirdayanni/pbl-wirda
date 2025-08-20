const express=require('express')
const productRoutes=require('./routes/products')
const app=express()
const port=3000


app.use(express.json())
app.use('/products', productRoutes)


app.get('/',(req,res)=>{
    res.send('Hello world.....!')
})

app.listen(port, ()=>{
    console.log(`server berjalan di http://localhost:${port}`);
})