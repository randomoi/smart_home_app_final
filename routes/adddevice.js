// connect Router from express
const { Router } = require('express')
const express = require('express');
const { vary } = require('express/lib/response');

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
const urlencodedParser = express.urlencoded({ extended: false });

// connect the database with promise() for asynchronous work
const db = require('../utils/db').promise();

// define the object router through call of Router()
const router = Router()

// call the get method and describe the route
router.get('/', (req, res) => {
  res.render('adddevice', {
    idData: '',
    title: 'Add device page',
    isPage: 'adddevice'
  })
})

// get the submitted data from the form via POST and add it to the database
router.post('/', urlencodedParser, async function (req, res) {
  try {
    // designate variables for incoming data, we also check whether the field is filled or not, if not, then make it null
    // name of device
    const nameDevice = req.body.name_device;

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

    /* 
    get the last value in the devices table, the id column to add the number 1 
    to id and thus increase it and add a unique id further
    */
    // using await to avoid prematurely closing the connection
    const result = await db.query("SELECT MAX(id) FROM devices");

    // the result of the work is defined in the object
    const obj = Object.values(result[0])[0];
    // get the maximum id value from the object and add 1 to add a unique id to the new device
    const objExtract = Object.values(obj)[0] + 1;

    // make a request to add a new device by specifying all the necessary parameters
    const result2 = await db.query("INSERT INTO devices (id, name, isOn, temperature, isOpen, brightness, volume, capacity) VALUES (?,?,?,?,?,?,?,?)", [objExtract, nameDevice, isOn, temperature, isOpen, brightness, volume, capacity]);

    // we make a redirect to the same page only by adding the id of the new device to display a message about the successful addition
    res.redirect("/adddevice/" + objExtract);
  } catch (e) {
    console.log(e.message);
  }
});

// get id and display information from the database and display it
router.get("/:id", async function (req, res) {
  try {

    // get id from query string
    const id = req.params.id;
    // make a request to the database to get all the data for the device with the corresponding id
    const data = await db.query("SELECT * FROM devices WHERE `id` = ? ", [id]);
    // get an array with data from the object
    const dataExtract = Object.values(data[0])[0];

    // for each of the parameters we assign a variable to display on the page
    //id of data
    const idData = dataExtract.id;
    // name of data
    const nameData = dataExtract.name;
    // on/off of data
    const isOnData = dataExtract.isOn;
    // temperature of data
    const temperatureData = dataExtract.temperature;
    // open/closed of data
    const isOpenData = dataExtract.isOpen;
    // brightness of data
    const brightnessData = dataExtract.brightness;
    // volume of data
    const volumeData = dataExtract.volume;
    // capacity of data
    const capacityData = dataExtract.capacity;
    // start rendering the page according to the template and pass all the parameters
    res.render('adddevice', {
      idData: idData,
      nameData: nameData,
      isOnData: isOnData,
      temperatureData: temperatureData,
      isOpenData: isOpenData,
      brightnessData: brightnessData,
      volumeData: volumeData,
      capacityData: capacityData,
      title: 'Add device page',
      isPage: 'adddevice',

    })
  } catch (e) {
    console.log(e.message);
  }

});


//export the router object outside
module.exports = router