import express from 'express';
// import notFoundMiddleware from './middleware/not-found.js';
// import errorHandleMiddleware from './middleware/error-handler.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express();


// middleware
// notFoundMiddleware
// errorHandleMiddleware
// app.use(notFoundMiddleware)  
// app.use(errorHandleMiddleware)

app.get('/', (req, res) => {
    throw new Error('Opp! Error')
    res.send('Welcome')
})

// app.use(notFoundMiddleware)
// app.use(errorHandleMiddleware)  

const port = process.env.PORT || 5000

app.listen(port, () => {
   
    console.log(`Server is listening on ${port}...`)
})