<template>
  <div class="d-flex flex-column m-3">
      <button class="btn btn-outline-light justify-self-center" @click="emitSubmitEvent">
          Convert
      </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitSubmitEvent() {
      this.$emit('submit');
    }
  }
}
</script>

<style>

</style>