
var homescreen = Vue.component("home-screen", {
    template:`
    <div id="homescreen_comp" class="container flexcolumn">
        <div class="box" id="homescreen_msg">
            <p class="text">Welcome to TIR installation.</p>
            <p class="text">This installer will prepare the environment and will install the package.</p>
            <p class="text">Press "Next" to continue.</p>
        </div>
    </div>
    `
})

var environment = Vue.component("environment", {
    template:`
    <div id="environment_comp" class="container flexcolumn hidden">
        <p class="text environment_msg">Choose which programs should be installed:</p>
        <div class="container environment_row">
            <div class="box environment_box">
                <div class="container centered">
                    <img class="logo" src="assets/python-logo.png"/>
                    <div class="container flexcolumn">
                        <p class="text">Python 3.6</p>
                        <p class="optionaltext">(Required)</p>
                    </div>
                    <div class="field switch-field">
                        <input id="python_chk" type="checkbox" name="switchExample" class="switch is-success" checked="checked">
                        <label for="python_chk"></label>
                    </div>
                </div>
            </div>
            <div class="box environment_box">
                <div class="container centered">
                    <img class="logo" src="assets/firefox-logo.png"/>
                    <div class="container flexcolumn">
                        <p class="text">Mozilla Firefox</p>
                        <p class="optionaltext">(Required)</p>
                    </div>
                    <div class="field switch-field ">
                        <input id="mozilla_chk" type="checkbox" name="switchExample" class="switch is-success" checked="checked">
                        <label for="mozilla_chk"></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="container environment_row">
            <div class="box environment_box">
                <div class="container centered">
                    <img class="logo" src="assets/git-logo.png"/>
                    <div class="container flexcolumn">
                        <p class="text">Git</p>
                        <p class="optionaltext">(Optional)</p>
                    </div>
                    <div class="field switch-field ">
                        <input id="git_chk" type="checkbox" name="switchExample" class="switch is-success">
                        <label for="git_chk"></label>
                    </div>
                </div>
            </div>
            <div class="box environment_box">
                <div class="container centered">
                    <img class="logo" src="assets/visual-studio-code-logo.png"/>
                    <div class="container flexcolumn">
                        <p class="text">Visual Studio Code</p>
                        <p class="optionaltext">(Optional)</p>
                    </div>
                    <div class="field switch-field">
                        <input id="vsc_chk" type="checkbox" name="switchExample" class="switch is-success">
                        <label for="vsc_chk"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

var choco = Vue.component("choco", {
    template:`
    <div id="choco_comp" class="container flexcolumn hidden">
        <div class="container centered flexcolumn">
            <p class="text">Chocolatey is installing the programs...</p>
            <span class="icon is-large">
                <i class="fas fa-spinner fa-pulse"></i>
            </span>
        </div>
    </div>
    `
})

var chocofinish = Vue.component("choco-finish", {
    template:`
    <div id="chocofinish_comp" class="container flexcolumn hidden">
        <div class="container centered flexcolumn">
            <p class="text">Chocolatey finished environment installation!</p>
            <span class="icon is-large">
                <i class="fas fa-check"></i>
            </span>
        </div>
    </div>
    `
})

var packagesplash = Vue.component("package-splash", {
    template:`
    <div id="packagesplash" class="container flexcolumn hidden">
        <div class="container centered flexcolumn">
            <p class="text">The package will be installed. Press "Next" to continue...</p>
        </div>
    </div>
    `
})

var package = Vue.component("package", {
    template:`
    <div id="package" class="container flexcolumn hidden">
        <div class="container centered flexcolumn">
            <p class="text">Package is being installed...</p>
            <span class="icon is-large">
                <i class="fas fa-spinner fa-pulse"></i>
            </span>
        </div>
    </div>
    `
})

var packagefinish = Vue.component("package-finish", {
    template:`
    <div id="packagefinish" class="container flexcolumn hidden">
        <div class="container centered flexcolumn">
            <p class="text">Package was installed successfully!</p>
            <span class="icon is-large">
                <i class="fas fa-check"></i>
            </span>
        </div>
    </div>
    `
})

var myapp = new Vue({
    el: "#app",
    data:{
        title: "TIR Installer",
        screen : 0,
        install: {
            python: true,
            firefox: true,
            git: false,
            vscode: false
        }
    },
    components: {
        homescreen,
        environment,
        choco,
        chocofinish,
        package,
        packagesplash,
        packagefinish
    },
    methods:{

    }
})