const {app, BrowserWindow} = require('electron')
const Promise = require("bluebird")
const cmd = require("node-cmd")


const windowArrays = []
const getAsync = Promise.promisify(cmd.get, {multiArgs:true, context: cmd})
const runAsync = Promise.promisify(cmd.run, {multiArgs:true, context: cmd})

let mainWindow

//functions
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
    });

    mainWindow.loadFile("index.html");

    mainWindow.on("closed", function() {
        mainWindow = null;
    });

    windowArrays.push(mainWindow)
};

async function taskKiller() {
    try {
        await runAsync(`TASKKILL /F /IM geckodriver.exe /FI "STATUS eq RUNNING"`);
        await runAsync(`TASKKILL /F /IM chromedriver.exe /FI "STATUS eq RUNNING"`);
    }catch(error){
        console.log(error);
    }
};

async function installChoco(argList){
    let fullpath = __dirname + "\\..\\..\\batches\\install_chocolatey.cmd " + argList.join(" ");
    return await getAsync(fullpath);
}

async function installPackage(){
    taskKiller();
    let fullpath = __dirname + "\\..\\..\\batches\\install_package.cmd "
    return await getAsync(fullpath);
}

function closeWindow(){
    app.quit()
};

//events
app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    };
});

app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    };
});

//exports

module.exports = {
    taskKiller,
    installChoco,
    installPackage,
    closeWindow
}
