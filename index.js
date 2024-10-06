import express from 'express'

const app=express()
const port =3000

const timeCalculation=(req,res,next)=> {
   let current_time=Date.now()
   console.log(`start_time ${current_time}`)

   res.on('finish',()=> {
      let comp_time=Date.now()
      console.log(`compleat_time ${comp_time}`)
      let time_taken=comp_time - current_time
      console.log(` time taken ${time_taken} ms`)
   })

   next()
}

app.use(timeCalculation)

app.get('/test',(req,res)=> {
   res.json('Route is Succesfully working')
})

app.listen(port,()=> {
   console.log(`Server is running on port ${port} sucesfully!..`)
})