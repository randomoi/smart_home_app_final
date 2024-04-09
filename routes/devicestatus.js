// connect Router from express
const { Router } = require('express')

// define the object router through call of Router()
const router = Router()

// connect database
const db = require('../utils/db');

// call the get method and describe the route
router.get("/", function (req, res) {
  // make a request to the database
  db.query("SELECT * FROM devices", function (err, data) {
    if (err) return console.log(err);
    // display the page itself, passing the query result in a variable
    res.render("devicestatus", {
      devices: data,
      title: 'Device status  page',
      isPage: 'devicestatus'
    });
  });
});

// export the router object outside
module.exports = router