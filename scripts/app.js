
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
        <div class="box" id="homescreen_msg">
            <p class="text">Installation!</p>

        </div>
    </div>
    `
})

var myapp = new Vue({
    el: "#app",
    data:{
        title: "TIR Installer",
        screen : 0
    },
    components: {
        homescreen,
        environment
    },
    methods:{

    }
})