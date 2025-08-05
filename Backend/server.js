const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./Routes/authRoutes')
const newsRoutes = require('./Routes/newsRoutes')
require('dotenv').config()

const app = express()
app.use(express.json())

connectDB()

app.use('/api/auth', authRoutes)
app.use('/api/news', newsRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))