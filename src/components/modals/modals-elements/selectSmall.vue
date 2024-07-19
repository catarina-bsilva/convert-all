<template>
    <div class="d-flex flex-column justify-items-center align-items-center w-100 mb-3">
        <label class="form-label" for="in1">{{SelLabel}}</label>
        <select class="form-select" name="sel" id="in1" style="width:20%" @change="optionValue" >
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
        "Ops"
    ],
    methods :{
        optionValue(event){
            const selectedValue = event.target.value;
            this.$emit("selected", selectedValue, this.SelLabel)
        }
    }

}
</script>

<style>

</style>