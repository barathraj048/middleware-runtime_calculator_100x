import express from 'express'

const app=express()
const port =3000

app.get('/test',(req,res)=> {
   res.json('Route is Succesfully working')
})

app.listen(port,()=> {
   console.log(`Server is running on port ${port} sucesfully!..`)
})