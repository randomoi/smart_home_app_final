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
    // display the page, passing the query result in a variable
    res.render("deletedevice", {
      devices: data,
      delId: '',
      title: 'Delete device page',
      isPage: 'deletedevice'
    });
  });
});

//process the POST request from the form to delete
router.post("/", function (req, res) {
  // get id from hidden input
  const id = req.body.hidInputDelForm;
  // make a request to the database for deletion
  db.query("DELETE FROM devices WHERE id=?", [id], function (err, data) {
    if (err) return console.log(err);
    // make a redirect after the delete is done
    res.redirect("/deletedevice/" + id);
  });
});

// call the get method and describe the route for displaying the page after deletion
router.get("/:id", function (req, res) {
  // make a request to the database
  const id = req.params.id;
  db.query("SELECT * FROM devices", function (err, data) {
    if (err) return console.log(err);
    // display the page, passing the query result in a variable
    res.render("deletedevice", {
      devices: data,
      delId: id,
      title: 'Delete device page',
      isPage: 'deletedevice'
    });
  });
});

// export the router object outside
module.exports = router