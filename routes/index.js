// connect Router from express
const { Router } = require('express')

// define the object router through call of Router()
const router = Router()

// call the get method and describe the route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home page',
    isPage: 'home'
  })
})

// export the router object outside
module.exports = router