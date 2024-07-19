<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                BMI Calculator
            </h1>
            <InputNumMed SelLabel="Weight (kg):" @selected="updateWeight" :value = "weight"/>
            <InputNumMed SelLabel="Height (cm):" @selected="updateHeight" :value = "height"/>
            <OutputNormal :Result = "total"/>    
            <CalcBtn/>
            <ResetBtn @click="resetForm"/>
            <br>
            <div class="d-flex">
                <h2 class="fs-5 me-2">Below 18.5: </h2>
                <p> Underweight</p>
            </div>
            <div class="d-flex">
                <h2 class="fs-5 me-2">18.5 - 24.9: </h2>
                <p>Healthy weight</p>
            </div>
            <div class="d-flex">
                <h2 class="fs-5 me-2">25.0 - 29.9: </h2>
                <p>Overweight</p>
            </div>
            <div class="d-flex">
                <h2 class="fs-5 me-2">30.0 and above: </h2>
                <p>Obesity</p>
            </div>
    </form>        
    </Modal>
</template>

<script>

import Modal from "../../reusables/modal.vue";
import InputNumMed from "../modals-elements/input-num-med.vue";
import InputNumSmall from "../modals-elements/input-num-small.vue";
import OutputNormal from "../modals-elements/output-normal.vue";
import CalcBtn from "../modals-elements/calc-btn.vue"
import ResetBtn from "../modals-elements/reset-btn.vue";

export default {
    components:{
        Modal,
        InputNumSmall,
        InputNumMed,
        OutputNormal,
        CalcBtn,
        ResetBtn
    },
    data () {
        return {
            weight: "",
            height: "",
            total: ""
        }
    },

    methods : {
        updateWeight(value) {
            this.weight = parseFloat(value);
        },
        updateHeight(value) {
            this.height = parseFloat(value);
        },
        submitForm(){
            if (this.height > 0) {
                this.total = (this.weight / ((this.height/100) ** 2)).toFixed(2);
            } else {
                this.total = 0;
            }
        },
        resetForm(){
            this.weight= "";
            this.height= "";
            this.total= "";  
        }
    }
}
</script>

<style>

</style>