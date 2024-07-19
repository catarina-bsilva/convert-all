<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Data Converter
            </h1>
            <SelectMed SelLabel="From" :Ops="Ops" :selectedValue="FromData" @selected="FromData = $event"  />
            <SelectMed SelLabel="To" :Ops="Ops" :selectedValue="ToData" @selected="ToData = $event" />
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
            Ops: ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            Value: 0,
            ValueByte: 0,
            FromData: "Byte",
            ToData: "Byte",
            Total: 0
        }
    }, 
    methods : {
        resetForm() {
            this.Value= 0
            this.ValueByte= 0
            this.FromData= "Byte"
            this.ToData= "Byte"
            this.Total = 0
        },
        updateInputValue(value) {
            this.Value = value
            if(this.FromData == "Byte"){
                this.ValueByte = value
            } else if(this.FromData == "KB"){
                this.ValueByte = value * 1024
            } else if(this.FromData == "MB"){
                this.ValueByte = value * (1024 ** 2)
            } else if(this.FromData == "GB"){
                this.ValueByte = value * (1024 ** 3)
            } else if(this.FromData == "TB"){
                this.ValueByte = value * (1024 ** 4)
            } else if(this.FromData == "PB"){
                this.ValueByte = value * (1024 ** 5)
            } else if(this.FromData == "EB"){
                this.ValueByte = value * (1024 ** 6)
            } else if(this.FromData == "ZB"){
                this.ValueByte = value * (1024 ** 7)
            } else if(this.FromData == "YB"){
                this.ValueByte = value * (1024 ** 8)
            }
        },
        submitForm(){
            if(this.ToData == "Byte"){
                this.Total = this.ValueByte 
            } else if(this.ToData == "KB"){
                this.Total = this.ValueByte  / 1024
            } else if(this.ToData == "MB"){
                this.Total = this.ValueByte  / (1024 ** 2)
            } else if(this.ToData == "GB"){
                this.Total = this.ValueByte  / (1024 ** 3)
            } else if(this.ToData == "TB"){
                this.Total = this.ValueByte  / (1024 ** 4)
            } else if(this.ToData == "PB"){
                this.Total = this.ValueByte  / (1024 ** 5)
            } else if(this.ToData == "EB"){
                this.Total = this.ValueByte  / (1024 ** 6)
            } else if(this.ToData == "ZB"){
                this.Total = this.ValueByte  / (1024 ** 7)
            } else if(this.ToData == "YB"){
                this.Total = this.ValueByte  / (1024 ** 8)
            }
        },
    }
}
</script>

<style>
</style>