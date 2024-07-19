<template>
    <Modal>
        <form @submit.prevent="submitForm">
            <h1>
                Relative Humidity and Dew Point Calculator
            </h1>
            <InputNumMed SelLabel="Temperature" :value="temperatureValue"  @selected="updateTemperatureValue" />
            <InputNumMed SelLabel="Vapor Pressure" :value="vaporPressureValue"  @selected="updateVaporPressureValue" />
            <InputNumMed SelLabel="Saturation Vapor Pressure" :value="saturationVaporPressureValue"  @selected="updateSaturationVaporPressureValue" />
            <OutputNormal :Result="TotalRH" label="Relative Humidity (%)"/>
            <OutputNormal :Result="TotalDP" label="Dew Point (°C)"/>
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
            temperatureValue: 0,
            vaporPressureValue: 0,
            saturationVaporPressureValue: 0,
            TotalRH: 0,
            TotalDP:0,
            Total: 0
        }      
    }, 
    methods : {
        resetForm() {
            this.temperatureValue = 0,
            this.vaporPressureValue= 0,
            this.saturationVaporPressureValue= 0,
            this.TotalRH = 0,
            this.TotalDP = 0, 
            this.Total = 0
        },
        updateTemperatureValue(value) {
        this.temperatureValue = parseFloat(value);
        },
        updateVaporPressureValue(value) {
        this.vaporPressureValue = parseFloat(value);
        },
        updateSaturationVaporPressureValue(value) {
        this.saturationVaporPressureValue = parseFloat(value);
        },
        submitForm(){
            const a = 17.27;
            const b = 237.7;
            const temperature = this.temperatureValue;
            const vaporPressure = this.vaporPressureValue;
            const saturationVaporPressure = this.saturationVaporPressureValue;
            const relativeHumidity = (vaporPressure / saturationVaporPressure) * 100;
            this.TotalRH = "Relative Humidity: " + relativeHumidity.toFixed(2) + "%";

            const alpha = (a * temperature) / (b + temperature) + Math.log(relativeHumidity / 100);
            const dewPoint = (b * alpha) / (a - alpha);
            this.TotalDP = "Dew Point: " + dewPoint.toFixed(2) + "°C";
        }
    }
    
}
</script>

<style>

</style>