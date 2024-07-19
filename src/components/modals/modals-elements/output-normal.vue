<template>
    <div class="bg-light w-100 mx-auto text-center my-4 rounded p-3"> 
        {{displayedResult}}
    </div>
</template>

<script>
export default {
    props: {
        Result: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            displayedResult: this.Result
        };
    },
    watch: {
        Result(newValue) {
            this.displayedResult = newValue;
        }
    }
}
</script>

<style>

</style>