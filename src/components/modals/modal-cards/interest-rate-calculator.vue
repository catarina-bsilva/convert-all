<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Interest Rate Calculator
            </h1>
            <InputNumMed SelLabel="Amount" :value="Amount"  @selected="updateAmount" />
            <InputNumMed SelLabel="Annual Interest Rate (%)" :value="Rate"  @selected="updateRate" />
            <InputNumMed SelLabel="Time Period (Years)" :value="TimePeriod"  @selected="updateTimePeriod" />
            <!-- <InputNumMed SelLabel="Compounding Periods per Year" :value="CompoundingPeriods"  @selected="updateCompoundingPeriods" /> -->
            <OutputNormal :Result="TotalS" label="Simple Rate"/>
            <!-- <OutputNormal :Result="TotalC" label="Compunding Rate"/> -->
            <CalcBtn/>
            <ResetBtn @click="resetForm"/>
        </form>        
    </Modal>
</template>

<script>
import Modal from "../../reusables/modal.vue"
import InputNumMed from "../modals-elements/input-num-med.vue"
import OutputNormal from "../modals-elements/output-normal.vue"
import CalcBtn from "../modals-elements/calc-btn.vue"
import ResetBtn from "../modals-elements/reset-btn.vue"
export default {
    components:{
        Modal,
        InputNumMed,
        OutputNormal,
        CalcBtn,
        ResetBtn
    },
    data () {
        return {
            Amount: 0,
            Rate: 0,
            TimePeriod: 0,
            //CompoundingPeriods: 0,
            TotalS: 0,
            TotalC:0,
            
        }      
    }, 
    methods : {
        resetForm() {
            this.Amount = 0
            this.Rate= 0
            this.TimePeriod= 0
           // this.CompoundingPeriods = 0
            this.TotalS = 0
            this.TotalC = 0
        },
        updateAmount(value) {
        this.Amount = parseFloat(value);
        },
        updateRate(value) {
        this.Rate = parseFloat(value);
        },
        updateTimePeriod(value) {
        this.TimePeriod = parseFloat(value);
        },
        /*updateCompoundingPeriods(value) {
        this.CompoundingPeriods = parseFloat(value);
        },*/
        submitForm(){
            const amount = this.Amount
            const rate = this.Rate / 100
            const time = this.TimePeriod
            const cPeriods = this.CompoundingPeriods

            this.TotalS = amount * rate * time
            /*if(cPeriods > 0){
                this.TotalC = amount * Math.pow((1 + rate / cPeriods), (cPeriods * time)) - amount
            } else {
                this.TotalC = "not enough information provided"
            }*/

            
        }
    }
    
}
</script>

<style>

</style>