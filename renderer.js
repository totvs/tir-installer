// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
const remote = electron.remote
const mainProcess = remote.require('./main')

//events
// document.getElementById("my-button").addEventListener("click", () => {
//     mainProcess.taskKiller()
// });

document.getElementById("next").addEventListener("click", () => {
    myapp.screen++;
    if (myapp.screen == 1) {
        myapp.title = "Environment"
        removeHiddenClass(document.getElementById("previous"));
        addHiddenClass(document.getElementById("homescreen_comp"));
        removeHiddenClass(document.getElementById("environment_comp"));
    }
});

document.getElementById("previous").addEventListener("click", () => {
    myapp.screen--;
    if (myapp.screen == 0) {
        myapp.title = "TIR Installer"
        addHiddenClass(document.getElementById("previous"));
        removeHiddenClass(document.getElementById("homescreen_comp"));
        addHiddenClass(document.getElementById("environment_comp"));
    }
});

//functions

function addHiddenClass(element) {
    var elemclass = element.attributes.class.value.trim()
    if (elemclass.indexOf("hidden") == -1) {
        elemclass += " hidden";
        element.attributes.class.value = elemclass;
    }
}

function removeHiddenClass(element) {
    var elemclass = element.attributes.class.value.trim()
    if (elemclass.indexOf("hidden") != -1) {
        var classes = elemclass.split(" ");
        var index = classes.indexOf("hidden");
        classes.splice(index, 1);
        element.attributes.class.value = classes.join(" ");
    }
}
