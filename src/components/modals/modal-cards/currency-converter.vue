    <template>
    <Modal>
        <form @submit.prevent="submitForm">
                <h1>
                    Currency Converter
                </h1>
                <SelectMed SelLabel="From" :Ops="Ops" @selected="updateFromCurrency" :selectedValue="fromCurrency" />
                <SelectMed SelLabel="To" :Ops="Ops" @selected="updateToCurrency" :selectedValue="toCurrency" />
                <InputNumMed SelLabel="Value" @selected="updateInputValue" :value="inputValue" />
                <OutputNormal :Result = "Total"/>    
                <SubmitBtn/>
                <ResetBtn @click="resetForm"/>
        </form>        
    </Modal>
        
</template>

<script>

import Modal from "../../reusables/modal.vue";
import InputNumMed from "../modals-elements/input-num-med.vue";
import InputNumSmall from "../modals-elements/input-num-small.vue";
import OutputNormal from "../modals-elements/output-normal.vue";
import ResetBtn from '../modals-elements/reset-btn.vue';
import SelectMed from "../modals-elements/selectMed.vue";
import SubmitBtn from "../modals-elements/submit-btn.vue";

export default {
    components:{
        Modal,
        InputNumSmall,
        InputNumMed,
        OutputNormal,
        SelectMed,
        SubmitBtn,
        ResetBtn
    },
    data () {
        return {
            APIDATA : {},
            Ops: [],
            Quotes: [],
            Total: 0,
            fromCurrency: "USD",
            toCurrency: "USD",
            inputValue: 0,
        }
    },
    mounted() {
        this.getAPIDATA();
    },
    methods : {
        updateFromCurrency(event) {
    this.fromCurrency = event;
  },
  updateToCurrency(event) {
    this.toCurrency = event;
  },
  updateInputValue(event) {
    this.inputValue = event;
  },
    resetForm() {
        this.inputValue= 0
        this.fromCurrency= "USD"
        this.toCurrency= "USD"
        this.Total = 0
        this.$forceUpdate()
        console.log("update")
    },
    async getAPIDATA() {
        const currencyConverterAPIKEY = "https://api.currencyapi.com/v3/latest?apikey=cur_live_BfYcue8eZiqBKvg5njUzLS08V7pVuZ8riSRHJv5T"
        try{
            const res = await fetch (currencyConverterAPIKEY)
            const data = await res.json()
            this.APIDATA = data
            this.Quotes = data.data
            this.Ops = Object.keys(data.data)
        } catch (error) {
            console.log(error)
        }
    },
    updateInputValue(value) {
        this.inputValue = value;
    },
    async submitForm() {
        const fromRate = this.fromCurrency === "USD" ? 1 : this.Quotes[this.fromCurrency].value;
        const toRate = this.toCurrency === "USD" ? 1 : this.Quotes[this.toCurrency].value;

        if (!fromRate || !toRate) {
            console.error("Invalid currency selection");
            return;
        }

        if (this.fromCurrency === "USD") {
            this.Total = this.inputValue * toRate;
        } else if (this.toCurrency === "USD") {
            this.Total = this.inputValue / fromRate;
        } else {
            const inUSD = this.inputValue / fromRate;
            this.Total = inUSD * toRate;
        }

        console.log("Total:", this.Total);
        console.log("fromCurrency:", this.fromCurrency);
        console.log("toCurrency:", this.toCurrency);
        console.log("fromIndex:", fromRate);
        console.log("toIndex:", toRate);
        console.log("inputValue:", this.inputValue);
    },

}
}
</script>

<style>

</style>