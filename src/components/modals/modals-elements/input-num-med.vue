<template>
    <div class="d-flex flex-column justify-items-center align-items-center w-100 mb-3">
        <label class="form-label" for="in2">{{SelLabel}}</label>
        <input class="form-control w-50" type="number" name="" id="in2" @change="inputValue" :value="value" step="any" >
    </div>
</template>

<script>
export default {
    props:[
        "SelLabel",
        "value"
    ],
    methods:{
        inputValue(event){
            const inputVal = event.target.value;
            this.$emit("selected", inputVal)
        }
}
    }
    
</script>

<style>

</style>