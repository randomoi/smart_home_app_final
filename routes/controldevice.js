// connect Router from express
const { Router } = require('express')
const express = require('express');

// define the object router through call of Router()
const router = Router()

//to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
const urlencodedParser = express.urlencoded({ extended: false });

// connect database
const db = require('../utils/db');

// call the get method and describe the route
router.get("/", function (req, res) {
  // make a request to the database
  db.query("SELECT * FROM devices", function (err, data) {
    if (err) return console.log(err);
    // display the page itself, passing the query result in a variable
    res.render("controldevice", {
      devices: data,
      dataEdit: '',
      dataUpEditSucc: '',
      title: 'Control device page',
      isPage: 'controldevice'
    });
  });
});

// process the request when the "edit" button is clicked
router.get("/edit/:id", function (req, res) {
  const id = req.params.id;
  db.query("SELECT * FROM devices WHERE id=?", [id], function (err, data) {
    if (err) return console.log(err);
    res.render("controldevice", {
      dataEdit: data[0],
      devices: '',
      dataUpEditSucc: '',
      title: 'Control device page',
      isPage: 'controldevice'
    });
  });
});

// process the post request after adding new parameters
router.post("/", urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  // designate variables for incoming data, we also check whether the field is filled or not, if not, then make it null
  // id 
  const idUp = req.body.id_device_up;

  // on/off 
  var isOn = req.body.is_on;
  if (!isOn) {
    isOn = null;
  }

  // open/closed
  var isOpen = req.body.is_open;
  if (!isOpen) {
    isOpen = null;
  }

  // temperature
  var temperature = req.body.temperature_input;
  if (!temperature) {
    temperature = null;
  }

  // brightness
  var brightness = req.body.brightness_input;
  if (!brightness) {
    brightness = null;
  }

  // volume
  var volume = req.body.volume_input;
  if (!volume) {
    volume = null;
  }

  // capacity
  var capacity = req.body.capacity_input;
  if (!capacity) {
    capacity = null;
  }


  console.log(req.body);
  // make an update request to the database with the specified parameters
  db.query("UPDATE devices SET isOn=?, temperature=?, isOpen=?, brightness=?, volume=?, capacity=?  WHERE id=?", [isOn, temperature, isOpen, brightness, volume, capacity, idUp], function (err, data) {
    if (err) return console.log(err);

    res.redirect("/controldevice/" + idUp);
  });
});

//process the request to display the page after a successful update
router.get("/:id", function (req, res) {
  // make a request to the database
  db.query("SELECT * FROM devices", function (err, data) {
    if (err) return console.log(err);
    // display the page itself, passing the query result in a variable
    res.render("controldevice", {
      dataUpEditSucc: req.params.id,
      devices: data,
      dataEdit: '',
      title: 'Control device page',
      isPage: 'controldevice'
    });
  });
});

// export the router object outside
module.exports = router