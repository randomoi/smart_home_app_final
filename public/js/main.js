// when you click on the "menu" icon, display the menu in the response
document.getElementById('menu_icon').onclick = function () {
    document.getElementById('menu_id').classList.add('open');
    document.getElementById('menu_icon').classList.add('close');
    document.getElementById('menu_icon_close').classList.add('open');
};


// when clicking on the "close" icon, display the menu in the adaptive
document.getElementById('menu_icon_close').onclick = function () {
    document.getElementById('menu_id').classList.remove('open');
    document.getElementById('menu_icon').classList.remove('close');
    document.getElementById('menu_icon_close').classList.remove('open');
};


/*
we set event listeners so that when a too large value is entered in the input, 
the maximum allowable value is simply written, we also check for the presence 
of an element on the page so that this code does not work on other pages
*/
// this is for temperature
if (document.getElementById("temperature_input_id")) {
    document.getElementById("temperature_input_id").addEventListener("change", function () {
        let v = parseInt(this.value);
        if (v < -50) this.value = -50;
        if (v > 100) this.value = 100;
    });
}

// this is for brightness
if (document.getElementById("brightness_input_id")) {
    document.getElementById("brightness_input_id").addEventListener("change", function () {
        let v = parseInt(this.value);
        if (v < 1) this.value = 1;
        if (v > 1000) this.value = 1000;
    });
}
// this is for sound volume
if (document.getElementById("volume_input_id")) {
    document.getElementById("volume_input_id").addEventListener("change", function () {
        let v = parseInt(this.value);
        if (v < 1) this.value = 1;
        if (v > 100) this.value = 100;
    });
}
// this is for capacity
if (document.getElementById("capacity_input_id")) {
    document.getElementById("capacity_input_id").addEventListener("change", function () {
        let v = parseInt(this.value);
        if (v < 1) this.value = 1;
        if (v > 300) this.value = 300;
    });
}

/* 
we check which radio button is selected and hide unnecessary 
parameter fields and display the necessary ones
*/
const radios = document.querySelectorAll(".input_wrap_first input");
for (const radio of radios) {
    // we hang on the click event and go through the loop to check
    radio.addEventListener('click', function (event) {
        let value = radio.value;
        let isOn = document.getElementsByClassName('is_on')[0];
        let isOpen = document.getElementsByClassName('is_open')[0];
        let temperature = document.getElementsByClassName('temperature')[0];
        let brightness = document.getElementsByClassName('brightness')[0];
        let volume = document.getElementsByClassName('volume')[0];
        let capacity = document.getElementsByClassName('capacity')[0];

        // display the section with the second step
        document.getElementsByClassName('step_2')[0].classList.remove('d-none');


        // remove the display class from the message with an error
        document.getElementById('error_message').classList.remove("true");

        // and check if the fields have an error class by looping through them
        const target = document.getElementsByClassName('param');
        for (let i = 0; i < target.length; i++) {
            if (target[i].classList.contains('error')) {
                target[i].classList.remove('error');
            }
        }

        /*
        hereinafter the structure is the same, we will remove the d-none class from the required fields, which hid the display
        and those that are not needed, we add the d-none class to hide the field
        */

        // if "Cooling" is selected
        if (value === 'Cooling') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.remove('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Heating" is selected
        if (value === 'Heating') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.remove('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Curtains" is selelcted
        if (value === 'Curtains') {
            isOn.classList.add('d-none');
            isOpen.classList.remove('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Blinds" is selected
        if (value === 'Blinds') {
            isOn.classList.add('d-none');
            isOpen.classList.remove('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }


        // if "Security" is selected
        if (value === 'Security') {
            isOn.classList.add('d-none');
            isOpen.classList.remove('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "TV" is selected
        if (value === 'TV') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.remove('d-none');
            capacity.classList.add('d-none');
        }

        // if "Radio" is selected
        if (value === 'Radio') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.remove('d-none');
            capacity.classList.add('d-none');
        }


        // if "Music" is selected
        if (value === 'Music') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.remove('d-none');
            capacity.classList.add('d-none');
        }

        // if "Fridge" is selected
        if (value === 'Fridge') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.remove('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Door lock" is selected
        if (value === 'Door lock') {
            isOn.classList.add('d-none');
            isOpen.classList.remove('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }


        // if "Oven" is selected
        if (value === 'Oven') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.remove('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Microwave" is selected
        if (value === 'Microwave') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Coffee maker" is selected
        if (value === 'Coffee maker') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.remove('d-none');
        }

        // if "Tea maker" is selected
        if (value === 'Tea maker') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.add('d-none');
            volume.classList.add('d-none');
            capacity.classList.remove('d-none');
        }

        // if "Bedroom lighting" is selected
        if (value === 'Bedroom lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Living room lighting" is selected
        if (value === 'Living room lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Bathroom lighting" is selected
        if (value === 'Bathroom lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Yard lighting" is selected
        if (value === 'Yard lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if "Baby lighting" is selected
        if (value === 'Baby room lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        // if  "Office lighting" is selected
        if (value === 'Office lighting') {
            isOn.classList.remove('d-none');
            isOpen.classList.add('d-none');
            temperature.classList.add('d-none');
            brightness.classList.remove('d-none');
            volume.classList.add('d-none');
            capacity.classList.add('d-none');
        }

        /*
        Since the same fields are used for different devices, then when choosing another device, 
        you need to reset the hidden fields so that they are not transmitted.
        */
        // to iterate over the resulting collection of elements using the for loop
        const param = document.getElementsByClassName('param');
        for (let i = 0, length = param.length; i < length; i++) {


            // if the block has class d-none, then do the following
            if (param[i].classList.contains('d-none')) {
                // define the need input 
                var parent = param[i];
                var child = parent.querySelector('input[type=radio]:checked');
                var childNumb = parent.querySelector('input[type=number]');

                // if child is not null
                if (child !== null) {
                    // and selected
                    if (child.checked === true) {
                        // then reset it
                        child.checked = false;
                    }
                }

                // now you need to reset it with input number
                // if input is not null
                if (childNumb !== null) {
                    // then reset it
                    childNumb.value = "";
                }
            }
        }
    });
}


// validation
var form = document.forms['addDevicePageForm'];
// on the submit event, interrupt the submit action and execute the function, if the function is successful, then we manually initialize the form submission
if (form) {
    form.onsubmit = function (e) {
        // interrupt the send action
        e.preventDefault();
        // function call
        validate_form();
    };
}


function validate_form() {
    // designate the variables for the array that we will use to display the message
    var required = [];
    // designate the future result, which will be sent to the message to the user
    var result = "";

    const param = document.getElementsByClassName('param');
    // loop through all divs with parameters
    for (let i = 0, length = param.length; i < length; i++) {

        // if there were errors before, then remove their classes in order to later add them only to those fields that were not re-filled
        param[i].classList.remove("error");
        document.getElementById('error_message').classList.remove("true");

        // select only those blocks that do not have d-none, that is, they are not hidden
        if (!param[i].classList.contains('d-none')) {
            // denoting these blocks as variables to make it easier to work with them
            var parent = param[i];
            var child = parent.querySelector('input');
            var name = child.name;
            var name2 = child.dataset.name;

            // if it does not contain a value, then add a readable name to the array for output
            if (!form[name].value && required.indexOf(name2) === -1) {
                // add to array
                required.push(name2);
                // add a stroke for blocks with no fields entered
                param[i].classList.add("error");
            }
        }
    }


    //if the array contains something, we will format an error message for output
    if (required.length) {
        result += "<span>You have not completed: </span>" + required.join(", ");
    }
    // if the result is formed, then display the block with the message and insert this message inside
    if (result) {
        // show block with error message
        var err = document.getElementById('error_message');
        err.classList.add("true");
        // form the full text of the error
        var errMess = '<h4>Error</h4> <p>' + result + ".</p>";
        // insert it into a block
        err.innerHTML = errMess;

    } else {
        // if there is no error, then manually submit the form
        form.submit();
    }
}


// when clicking on "more info" display additional information
const btns = document.getElementsByClassName("more_btn");
// if exists on the page, then working further
if (btns) {
    // add an event listener to all "more info" buttons on the page
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            // get id from data attribute
            var dataId = this.dataset.id;
            // search by id for the block to expand
            const more = document.getElementsByClassName("more");
            for (var i = 0; i < more.length; i++) {
                // define a variable for comparison where we add the name to id
                // these blocks with information have following format id
                var trueId = "more-" + dataId;

                // check if the id of the pressed button matches the found block
                if (trueId === more[i].getAttribute("id")) {
                    // if already open, then hide the block
                    if (more[i].classList.contains('open')) {
                        more[i].classList.remove('open');
                    } else {
                        // if not open, then display
                        more[i].classList.add('open');
                    }
                    // stop the loop so that only 1 block is processed and to not pointlessly check all the blocks on the page
                    return;
                }

            }

        });
    }
}

// when clicking on "delete" display a modal window
const btnsDel = document.getElementsByClassName("del_btn_js");
// if there is on the page, then work further
if (btnsDel) {
    // add an event listener to all "more info" buttons on the page
    for (var i = 0; i < btnsDel.length; i++) {
        btnsDel[i].addEventListener("click", function () {

            // get id from data attribute
            var dataId = this.dataset.delid;

            // open modal window with deletion confirmation
            document.getElementById('popupId').classList.add('open');

            // write hidden id input of the device, which needs to be deleted
            document.getElementById('hidInputDelForm').value = dataId;
        });
    }
}

const btnNoDell = document.getElementById('btnDelFormClose');
if (btnNoDell) {
    // close the modal window when the "No" button is clicked
    btnNoDell.onclick = function (e) {
        // cancel link action
        e.preventDefault();
        // close window
        document.getElementById('popupId').classList.remove('open');
        // reset the value in the hidden input
        document.getElementById('hidInputDelForm').value = '';
    };
}