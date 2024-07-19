<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Temperature Converter
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
            Ops: ["C", "F", "K"],
            Value: 0,
            FromType: "C",
            ToType: "C",
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.Value= 0
            this.FromType= "C"
            this.ToType= "C"
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
            if(this.FromType == "C"){
                if(this.ToType == "F"){
                    this.Total = this.Value * (9/5) + 32
                } else if(this.ToType == "K"){
                    this.Total = this.Value + 273.15
                }
            } else if(this.FromType == "F"){
                if(this.ToType == "C"){
                    this.Total = (this.Value - 32) * (5/9) 
                } else if(this.ToType == "K"){
                    this.Total = (this.Value - 32) * (5/9) + 273.15
                }
            } else if(this.FromType == "K"){
                if(this.ToType == "F"){
                    this.Total = (this.Value - 273.15) * (9/5) + 32
                } else if(this.ToType == "C"){
                    this.Total = this.Value - 273.15
                }
            }
        }
    }
    
}
</script>

<style>

</style>