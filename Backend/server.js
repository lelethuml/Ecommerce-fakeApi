//importing modules
const express = require('express')

const cookieParser = require('cookie-parser')
 const db = require('../backend/models')
 const userRoutes = require ('../backend/routes/userRoutes')

const imageRoutes = require('../backend/routes/imageRoutes'); // Import the image routes

//setting up your port
const PORT = process.env.PORT || 3000

//assigning the variable app to express
const app = express()

// Parse JSON request bodies
app.use(express.json());

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false}).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)
// Routes for the image API
app.use('/images', imageRoutes); // Add the image routes here




// Routes for the user API
// app.use('/api/users', userRoutes);
// Routes for the image API


//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))

