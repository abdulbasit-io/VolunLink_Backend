import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = (): void => {
  mongoose
    .connect(process.env.MONGODB_URI || '')
    .then((conBool) => {
      console.log(`MongoDB connected: ${conBool.connection.host}`)
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err.message}`)
    })
}

export default connectDB
