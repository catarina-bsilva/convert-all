<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Main from './components/layout/Main.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


</script>

<template>
    <header class="mb-0 sticky-top ">
      <Header/>
    </header>
    <RouterView/>
</template>

<style >

</style>
