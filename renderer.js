// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
const remote = electron.remote
const mainProcess = remote.require('./main')

//events
document.getElementById("fresh_install").addEventListener("click", () => {
    myapp.screen = 1;
    myapp.title = "Environment Installation";
    myapp.skipped = false;
    removeHiddenClass(document.getElementById("previous"));
    removeHiddenClass(document.getElementById("next"));
    removeHiddenClass(document.getElementById("skip_environment"));
    addHiddenClass(document.getElementById("homescreen_comp"));
    removeHiddenClass(document.getElementById("environment_comp"));
});

document.getElementById("update_package").addEventListener("click", () => {
    myapp.screen = 3
    myapp.title = "Package Installation"
    myapp.skipped = true;
    removeHiddenClass(document.getElementById("previous"));
    removeHiddenClass(document.getElementById("next"));
    addHiddenClass(document.getElementById("homescreen_comp"));
    removeHiddenClass(document.getElementById("packagesplash"));
});

document.getElementById("next").addEventListener("click", () => {
    if(myapp.screen == 1 && environmentIsSkipable()){
        myapp.screen+=2;
    }else{
        myapp.screen++;
    }

    if (myapp.screen == 1) {
        myapp.title = "Environment Installation"
        removeHiddenClass(document.getElementById("previous"));
        removeHiddenClass(document.getElementById("skip_environment"));
        addHiddenClass(document.getElementById("homescreen_comp"));
        removeHiddenClass(document.getElementById("environment_comp"));
    }else if(myapp.screen == 2){
        addHiddenClass(document.getElementById("skip_environment"));
        addHiddenClass(document.getElementById("previous"));
        addHiddenClass(document.getElementById("next"));
        addHiddenClass(document.getElementById("environment_comp"));
        removeHiddenClass(document.getElementById("choco_comp"));

        installChoco(getChocoArgList()).then((data) => {
            if(data[0].trim() == "success"){
                addHiddenClass(document.getElementById("choco_comp"))
                removeHiddenClass(document.getElementById("chocofinish_comp"));
                removeHiddenClass(document.getElementById("next"));
            }
        });
    }else if(myapp.screen == 3){
        myapp.title = "Package Installation"
        addHiddenClass(document.getElementById("chocofinish_comp"))
        removeHiddenClass(document.getElementById("packagesplash"));
    }else if(myapp.screen == 4){
        addHiddenClass(document.getElementById("packagesplash"))
        addHiddenClass(document.getElementById("next"));
        addHiddenClass(document.getElementById("previous"));
        removeHiddenClass(document.getElementById("package"));

        installPackage().then(() => {
            addHiddenClass(document.getElementById("package"))
            removeHiddenClass(document.getElementById("packagefinish"));
            removeHiddenClass(document.getElementById("close"));
        });
    }
});

document.getElementById("previous").addEventListener("click", () => {
    if(myapp.screen == 3){
        (myapp.skipped) ? myapp.screen=0 : myapp.screen-=2;
        addHiddenClass(document.getElementById("packagesplash"));
    }else{
        myapp.screen--;
    }
    if (myapp.screen == 0) {
        myapp.title = "TIR Installer"
        addHiddenClass(document.getElementById("previous"));
        addHiddenClass(document.getElementById("next"));
        addHiddenClass(document.getElementById("skip_environment"));
        removeHiddenClass(document.getElementById("homescreen_comp"));
        addHiddenClass(document.getElementById("environment_comp"));
    }else if(myapp.screen == 1) {
        myapp.title = "Environment Installation"
        removeHiddenClass(document.getElementById("previous"));
        removeHiddenClass(document.getElementById("skip_environment"));
        addHiddenClass(document.getElementById("homescreen_comp"));
        removeHiddenClass(document.getElementById("environment_comp"));
    }
});

document.getElementById("skip_environment").addEventListener("click", () => {
        myapp.screen+=2;
        myapp.install.python = false
        myapp.install.firefox = false
        myapp.install.git = false
        myapp.install.vscode = false
        myapp.title = "Package Installation"
        addHiddenClass(document.getElementById("skip_environment"));
        addHiddenClass(document.getElementById("environment_comp"));
        removeHiddenClass(document.getElementById("packagesplash"));
});

document.getElementById("python_chk").addEventListener("change", () => {
    myapp.install.python = document.getElementById("python_chk").checked
});

document.getElementById("mozilla_chk").addEventListener("change", () => {
    myapp.install.firefox = document.getElementById("mozilla_chk").checked
});

document.getElementById("git_chk").addEventListener("change", () => {
    myapp.install.git = document.getElementById("git_chk").checked
});

document.getElementById("vsc_chk").addEventListener("change", () => {
    myapp.install.vscode = document.getElementById("vsc_chk").checked
});

document.getElementById("close").addEventListener("click", () => {
    closeWindow();
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

function getChocoArgList() {
    var argList = []
    argList.push((myapp.install.python) ? "Y" : "N")
    argList.push((myapp.install.firefox) ? "Y" : "N")
    argList.push((myapp.install.git) ? "Y" : "N")
    argList.push((myapp.install.vscode) ? "Y" : "N")
    return argList;
}

function environmentIsSkipable(){
    return !(myapp.install.python ||
            myapp.install.firefox ||
            myapp.install.git ||
            myapp.install.vscode)
}

function installChoco(argList) {
    return mainProcess.installChoco(argList);
}

function installPackage(){
    return mainProcess.installPackage();
}

function closeWindow(){
    mainProcess.closeWindow();
}