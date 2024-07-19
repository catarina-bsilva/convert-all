<template>
    <div class="d-flex flex-column justify-items-center align-items-center w-100 mb-3">
        <label class="form-label" for="in1">{{SelLabel}}</label>
        <select class="form-select" name="sel" id="in1" style="width:40%" @change="optionValue" :value="selectedValue" >
            <option v-for="o in Ops" v-bind:key = "o" :value="o">{{ o }}</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    props:[
        "SelLabel",
        "Ops",
        "selectedValue"
    ],
    methods :{
        optionValue(event){
            const selectedValue = event.target.value;
            this.$emit("selected", selectedValue)
        }
    },
    watch: {
        selectedValue(newValue) {
            this.$nextTick(() => {
                const selectElement = this.$el.querySelector("select");
                selectElement.value = newValue;
            
            });
        }
    }

}
</script>

<style>

</style>