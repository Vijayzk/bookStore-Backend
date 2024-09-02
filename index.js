import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;

app.use(cors())
app.use(express.json())

//Connnect to mongoDB
try{
   mongoose.connect(URI);  
   console.log("Connected to MongoDB")
}
catch(error){
    console.log(error)
}

//Defining Routes
app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})