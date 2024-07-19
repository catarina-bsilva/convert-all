<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Energy Converter
            </h1>
            <SelectMed SelLabel="From" :Ops="Ops" :selectedValue="FromType" @selected="FromType = $event"  />
            <SelectMed SelLabel="To" :Ops="Ops" :selectedValue="ToType" @selected="ToType = $event" />
            <InputNumMed SelLabel="Value" :value="Value"  @selected="updateInputValue" />
            <OutputNormal :Result = "Total"/>  
            <SubmitBtn/>
            <ResetBtn @click="resetForm"/>
        </form>        
    </Modal>
</template>

<script>
import Modal from "../../reusables/modal.vue"
import InputNumMed from "../modals-elements/input-num-med.vue"
import OutputNormal from "../modals-elements/output-normal.vue"
import SelectMed from "../modals-elements/selectMed.vue"
import SubmitBtn from "../modals-elements/submit-btn.vue"
import ResetBtn from "../modals-elements/reset-btn.vue"
import DB from '/src/calBD/energyDB.json'
export default {
    components:{
        Modal,
        InputNumMed,
        OutputNormal,
        SelectMed,
        SubmitBtn,
        ResetBtn
    },
    data () {
        return {
            Ops: ["J", "cal", "kcal", "BTU", "ft-lb", "kWh", "eV", "thm" ],
            Value: 0,
            FromType: "kWh",
            ToType: "kWh",
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.Value= 0
            this.FromType= "kWh"
            this.ToType= "kWh"
            this.Total = 0
        },
        updateInputValue(value) {
        this.Value = parseFloat(value);
        },
        submitForm(){
            if (this.FromType === this.ToType) {
            this.Total = this.Value;
            return;
        }   
        const fromTypeData = DB.From[this.FromType]
        if (fromTypeData && fromTypeData[this.ToType] !== undefined) {
            const conversionRate = fromTypeData[this.ToType];
            this.Total =(this.Value * conversionRate).toFixed(2)
        } else {
            this.Total = "Conversion rate not found.";
        }
        }
    }
    
}
</script>

<style>

</style>