<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Time Unit Converter
            </h1>
            <SelectMed SelLabel="From" :Ops="Ops" :selectedValue="FromData" @selected="FromData = $event"  />
            <SelectMed SelLabel="To" :Ops="Ops" :selectedValue="ToData" @selected="ToData = $event" />
            <InputNumMed SelLabel="Value" :value="Value" @selected="updateInputValue" />
            <OutputNormal :Result = "Total"/>    
            <SubmitBtn/>
        </form>        
    </Modal>
</template>

<script>
import Modal from "../../reusables/modal.vue"
import InputNumMed from "../modals-elements/input-num-med.vue"
import OutputNormal from "../modals-elements/output-normal.vue"
import SelectMed from "../modals-elements/selectMed.vue"
import SubmitBtn from "../modals-elements/submit-btn.vue"
export default {
    components:{
        Modal,
        InputNumMed,
        OutputNormal,
        SelectMed,
        SubmitBtn
    },
    data () {
        return {
            Ops: ["Year", "Month","Week", "Day", "Hour", "Minute", "Second"],
            Value: 0,
            ValueSecond: 0,
            FromData: "Year",
            ToData: "Year",
            Total: 0
        }
    }, 
    methods : {
        updateInputValue(value) {
            this.Value = value
            this.calculateValueInSeconds();
        },
        resetForm() {
            this.Value= 0
            this.ValueSecond= 0
            this.FromData= "Year"
            this.ToData= "Year"
            this.Total = 0
            this.$forceUpdate()
            console.log("update")
        },
        calculateValueInSeconds() {
            if (this.FromData == "Second") {
                this.ValueSecond = this.Value;
            } else if (this.FromData == "Minute") {
                this.ValueSecond = this.Value * 60;
            } else if (this.FromData == "Hour") {
                this.ValueSecond = this.Value * 60 * 60;
            } else if (this.FromData == "Day") {
                this.ValueSecond = this.Value * 60 * 60 * 24;
            } else if (this.FromData == "Week") {
                this.ValueSecond = this.Value * 60 * 60 * 24 * 7;
            } else if (this.FromData == "Month") {
                this.ValueSecond = this.Value * 60 * 60 * 24 * 30;
            } else if (this.FromData == "Year") {
                this.ValueSecond = this.Value * 60 * 60 * 24 * 365;
            }
        },
        submitForm(){
            if(this.ToData == "Second"){
                this.Total = this.ValueSecond 
            } else if(this.ToData == "Minute"){
                this.Total = Math.floor (this.ValueSecond  / 60)
            } else if(this.ToData == "Hour"){
                this.Total = Math.floor (this.ValueSecond  / (60 * 60))
            } else if(this.ToData == "Day"){
                this.Total = Math.floor (this.ValueSecond  / (60 * 60 * 24))
            } else if(this.ToData == "Week"){
                this.Total = Math.floor (this.ValueSecond  / (60 * 60 * 24 * 7))
            } else if(this.ToData == "Month"){
                this.Total = Math.floor (this.ValueSecond  / (60 * 60 * 24 * 30))
            } else if(this.ToData == "Year"){
                this.Total = Math.floor (this.ValueSecond  / (60 * 60 * 24 * 365))
            } 
        setTimeout(() => this.resetForm(), 5000)
        console.log(this.Total)
        }
        
    }
}
</script>

<style>

</style>