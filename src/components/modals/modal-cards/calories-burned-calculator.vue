<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Calories Burned Calculator
            </h1>
            <SelectMed SelLabel="Activity" :Ops="Ops" :selectedValue="Activity" @selected="Activity = $event" />
            <InputNumMed SelLabel="Minutes" :value="Minutes"  @selected="updateInputMinutes" />
            <InputNumMed SelLabel="Your weight" :value="Weight"  @selected="updateInputWeight" />
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
import DB from '/src/calBD/caloriesBurnedDB.json'
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
            Ops: [
    "Aerobics (high impact)",
    "Aerobics (low impact)",
    "Basketball (game)",
    "Bicycling (16-19 km/h)",
    "Bicycling (19-22 km/h)",
    "Bicycling (leisure)",
    "Climbing (ascending)",
    "Cooking",
    "Dancing (moderate)",
    "Dancing (vigorous)",
    "Fishing (standing)",
    "Football (recreational)",
    "Gardening (heavy)",
    "Gardening (light)",
    "Golf (with cart)",
    "Golf (without cart)",
    "House cleaning",
    "Jumping rope (moderate)",
    "Jumping rope (vigorous)",
    "Pilates",
    "Rugby",
    "Running (12 km/h)",
    "Running (8 km/h)",
    "Sitting quietly",
    "Skiing cross-country (light)",
    "Skiing cross-country (vigorous)",
    "Sleeping",
    "Soccer (recreational)",
    "Standing",
    "Swimming (moderate)",
    "Swimming (vigorous)",
    "Tennis (doubles)",
    "Tennis (singles)",
    "Walking (moderate)",
    "Walking (outdoor)",
    "Walking (quick)",
    "Weightlifting (moderate)",
    "Weightlifting (vigorous)",
    "Yoga"
],
            Weight: 0,
            Minutes: 0,
            Activity: "Running (8 km/h)",
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.Minutes= 0
            this.Weight = 0
            this.Activity= "Running (8 km/h)"
            this.Total = 0
        },
        updateInputMinutes(value) {
        this.Minutes = parseFloat(value);
        },
        updateInputWeight(value) {
        this.Weight = parseFloat(value);
        },
        submitForm(){
            const ActivityMET = DB.activities[this.Activity]
            this.Total = (ActivityMET * this.Weight * (this.Minutes / 60)).toFixed(2)
            console.log(ActivityMET, this.Weight, this.Minutes )
            console.log(this.Activity)
        }   
    } 
}
</script>

<style>

</style>