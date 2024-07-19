<template>
    <h1>{{ x.category}}</h1>
    <ul v-for="c in categories" :key="c"></ul>
</template>

<script>
import Bd from "../../assets/bd.json"
export default {
    data (){
      return {
        categories: Bd.Categories,
        category:Bd.Categories[x].category,
        converters:Bd.Categories[x].converters
      }
    },
}
</script>

<style>

</style>