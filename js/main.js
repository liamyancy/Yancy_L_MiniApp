import { fetchData } from "./modules/TheDataMiner.js";
import Minis from "./modules/MiniData.js";

(() => {

    let vue_vm = new Vue({

        // el: "#app",

        data: {
            showMiniInfo: false,
            miniCoopers: [],
            currentMiniData: {}
        },

        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(tbl_minis => this.miniCoopers.push(tbl_minis));
                })
                .catch(err => console.error(err));
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        components: {
            "mini-data": Minis
        }
        
    }).$mount("#app");
})();