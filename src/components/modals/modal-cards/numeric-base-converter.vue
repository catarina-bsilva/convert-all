<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Numeric Base Converter
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
            Ops: ["Decimal", "Binary", "Octal", "Hexa"],
            Value: 0,
            FromType: "Decimal",
            ToType: "Decimal",
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.Value= 0
            this.FromType= "Decimal"
            this.ToType= "Decimal"
            this.Total = 0
        },
        updateInputValue(value) {
            this.Value = parseInt(value)
        },
        submitForm(){
            if (this.FromType === this.ToType) {
            this.Total = this.Value;
            return;
            }   
            if (this.FromType && this.ToType !== undefined) {
                if (this.FromType == "Decimal"){
                    if (this.ToType == "Binary"){
                        this.Total = this.Value.toString(2)
                    } else if (this.ToType == "Octal"){
                        this.Total = this.Value.toString(8)
                    }else if (this.ToType == "Hexa"){
                        this.Total = this.Value.toString(16).toUpperCase()
                    }
                } else if (this.FromType == "Binary"){
                    if (this.ToType == "Decimal"){
                        this.Total = parseInt(this.Value, 2).toString(10)
                    } else if (this.ToType == "Octal"){
                        let decimal = parseInt(this.Value, 2);
                        this.Total = decimal.toString(8)
                    }else if (this.ToType == "Hexa"){
                        let decimal = parseInt(this.Value, 2);
                        this.Total = decimal.toString(16).toUpperCase()
                    }
                } else if (this.FromType == "Octal"){
                    if (this.ToType == "Decimal"){
                        this.Total = parseInt(this.Value, 8).toString(10)
                    } else if (this.ToType == "Binary"){
                        let decimal = parseInt(this.Value, 8);
                        this.Total = decimal.toString(2)
                    }else if (this.ToType == "Hexa"){
                        let decimal = parseInt(this.Value, 8);
                        this.Total = decimal.toString(16).toUpperCase()
                    }
                } else if (this.FromType == "Hexa"){
                    if (this.ToType == "Decimal"){
                        this.Total = parseInt(this.Value, 16).toString(10)
                    } else if (this.ToType == "Binary"){
                        let decimal = parseInt(this.Value, 16);
                        this.Total = decimal.toString(2)
                    }else if (this.ToType == "Octal"){
                        let decimal = parseInt(this.Value, 16);
                        this.Total = decimal.toString(8)
                    }
                }   
            } else {
                this.Total = "Conversion rate not found.";
            }
        }
    }
}
</script>

<style>

</style>