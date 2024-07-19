<template>
    <div class="d-flex flex-column m-3">
        <button class="btn btn-outline-light justify-self-center" @click="emitResetEvent">
            Reset
        </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      emitResetEvent() {
        this.$emit('reset');
      }
    }
  }
  </script>
  
  <style>
  
  </style>