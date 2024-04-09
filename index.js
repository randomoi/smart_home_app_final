// connect the express package
const express = require('express')

// import all routes
// page route: Home
const homeRoutes = require('./routes/index')
// page route: About
const aboutRoutes = require('./routes/about')
// page route: Control device
const controldeviceRoutes = require('./routes/controldevice')
// page route: Add device
const adddeviceRoutes = require('./routes/adddevice')
// page route: Delete device
const deletedeviceRoutes = require('./routes/deletedevice')
// page route: Device status
const devicestatusRoutes = require('./routes/devicestatus')

// create a variable that is the result of express
const app = express()


//set ejs as template for our project
app.set('view engine', 'ejs')

// denoting that the page templates are in the views/pages folder
app.set('views', 'views/pages')

// register that the public folder will be static for the client side of the application. The folder will store css, js and img of the front end of the application
app.use(express.static('public'))

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
app.use(express.urlencoded({extended: true}))

/*
to use routes we register them with "app", call the "use" method and pass our routes;
we also write prefixes for routes for more convenient interaction
*/
// page route: Home
app.use('/', homeRoutes)
// page route: About
app.use('/about', aboutRoutes)
// page route: Control device
app.use('/controldevice', controldeviceRoutes)
// page route: Add device
app.use('/adddevice', adddeviceRoutes)
// page route: Delete device
app.use('/deletedevice', deletedeviceRoutes)
// page route: Device status
app.use('/devicestatus', devicestatusRoutes)

// run the listen method to listen on port 8089
app.listen(8089, () => {
  console.log(`Server is running on port 8089`)
})