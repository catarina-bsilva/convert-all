<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Planetary Age Calculator
            </h1>
            <SelectMed SelLabel="From" :Ops="Ops" :selectedValue="FromPlanet" @selected="FromPlanet = $event"  />
            <SelectMed SelLabel="To" :Ops="Ops" :selectedValue="ToPlanet" @selected="ToPlanet = $event" />
            <InputNumMed SelLabel="Value" :value="Value"  @selected="updateInputValue" />
            <OutputNormal :Result = "Total"/>  
            <CalcBtn/>
            <ResetBtn @click="resetForm"/>
        </form>        
    </Modal>
</template>

<script>
import Modal from "../../reusables/modal.vue"
import InputNumMed from "../modals-elements/input-num-med.vue"
import OutputNormal from "../modals-elements/output-normal.vue"
import SelectMed from "../modals-elements/selectMed.vue"
import CalcBtn from "../modals-elements/calc-btn.vue"
import ResetBtn from "../modals-elements/reset-btn.vue"
import DB from '/src/calBD/planetaryCal.json'
export default {
    components:{
        Modal,
        InputNumMed,
        OutputNormal,
        SelectMed,
        CalcBtn,
        ResetBtn
    },
    data () {
        return {
            Ops: ["Earth", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
            Value: 0,
            FromPlanet: "Earth",
            ToPlanet: "Earth",
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.Value= 0
            this.FromPlanet= "Earth"
            this.ToPlanet= "Earth"
            this.Total = 0
        },
        updateInputValue(value) {
        this.Value = parseFloat(value);
        },
        submitForm(){
            if (this.FromPlanet === this.ToPlanet) {
            this.Total = this.Value;
            return;
        }   
        const fromPlanetData = DB.From[this.FromPlanet]
        if (fromPlanetData && fromPlanetData[this.ToPlanet] !== undefined) {
            const conversionRate = fromPlanetData[this.ToPlanet];
            this.Total = "aproximately " + (this.Value / conversionRate).toFixed() + " years"
        } else {
            this.Total = "Conversion rate not found.";
        }
        }
    }
}
</script>

<style>

</style>