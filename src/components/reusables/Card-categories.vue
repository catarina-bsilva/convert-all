<template>
      <div class="row justify-content-center  ">
            <div class="col-sm-6 col-md-4 col-xl-3 mb-3 " v-for="x in categories" :key="x" >
                  <router-link :to="`/categories/${x.id}`" class="text-decoration-none">
                        <div class="card shadow-sm m-auto" style="width: 15rem; height: 18rem">
                              <div class="card-header text-center bg-info bg-opacity-25">
                                    <h5 >{{ x.Category }}</h5>
                              </div>
                              <div class="card-body opacity"
                                  :style="`background-image: url(${x.image});
                                  background-size: cover; position:relative`">
                                  <small>
                                      <p style="background-color: rgba(0, 0, 0, 0.5);
                                          color: white; position: absolute; bottom: 0;"
                                          class="me-3">({{ x.Converters.map(converter => converter.name).join(', ') }})
                                          </p>
                                  </small>
                              </div>
                        </div>
                  </router-link>
            </div>
      </div>
</template>

<script>
import Bd from "@/assets/bd.json"
export default {
    data (){
      return {
        categories: Bd.Categories
      }
    },

}
</script>

<style>

</style>