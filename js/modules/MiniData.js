export default {
        name: "MiniData",

        props: ["tbl_minis"],

        data: function() {
            return{
            Model: this.tbl_minis.Model,
            Price: this.tbl_minis.Price,
            Description: this.tbl_minis.Description,
            Exterior: this.tbl_minis.Exterior,
            Interior: this.tbl_minis.Interior,
            Performance: this.tbl_minis.Performance,
            Connectivity: this.tbl_minis.Connectivity,
            Safety: this.tbl_minis.Safety,
            FuelEfficiency: this.tbl_minis.FuelEfficiency,
            Image: this.tbl_minis.Image,
            showDetails: "More Details",
            hideDetails: "Hide Details",
            Details: " ",
            hideDescription: " "
            }
        },

        template:
            `<section @click="selectModel">
                <h2 class="Model-name">{{ tbl_minis.Model }}</h2>
                <img :src="'images/' + tbl_minis.Image" alt="Model Image">
                <p class="miniFeatures">Exterior: {{ Exterior }}<br> Interior: {{ Interior }}<br> Performance: {{ Performance }}<br> Connectivity: {{ Connectivity }}<br> Safety: {{ Safety }}<br> Fuel-Efficiency: {{ FuelEfficiency }}</p>
                <p @click="showDescription" class="detailsButton">{{ showDetails }}</p>
                <p class="miniDesc">{{ hideDescription }}</p>
            </section>`,

        created: function() {
            console.log(`Added ${this.tbl_minis.Model}'s Data`);
        },
        
        methods: {

            selectModel() {
                console.log(`Selected ${this.tbl_minis.Model}`);
            },

            showDescription() {
                console.log(`Show details for ${this.tbl_minis.Model}`);
                this.showDetails = this.Details;
                this.hideDescription = this.Description;
            },
        }  
}