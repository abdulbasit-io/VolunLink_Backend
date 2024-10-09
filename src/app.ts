import express, { type Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

//Body parser
app.use(express.json())
app.use(cookieParser())

// cors 
app.use(
    cors({
        credentials: true
    })
)

// root
app.get('/', (_, res:Response) => {
    res.send('Welcome to VolunLink Backend')
})

export default app