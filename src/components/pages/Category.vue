<template>
  <div class="container">
    <router-link to="/">
      <button class="btn text-info mt-3 mb-0 ">
        Home
      </button>
    </router-link>
    <h1 class="text-center text-info fw-bolder mt-0 mb-5"> {{category.Category }}</h1>
    <CardConversor/>
  </div>
</template>

<script>
import Bd from "../../assets/bd.json"
import CardConversor from "../reusables/Card-conversor.vue"

export default {
    data (){
      return {
        category: null
      }
    },
    created() {
      const categoryId = this.$route.params.id;
      this.category = Bd.Categories.find(c => c.id.toString() === categoryId);
      console.log(this.category);
    },
    components: {
      CardConversor
    }
}
</script>

<style>

</style>