<template>
  <div class="home">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <h2 class="my-5">All Destination</h2>
          <div class="row">
            <div class="col-md-3" 
            v-for="destination in destinations" 
            :key="destination.id">
            <router-link :to="{name:'destination',params:{id:destination.id}}">
              <div class="card border-0">
                <div class="card-body">
                  <h5 class="card-title">{{destination.name}}</h5>
                  <img :src="`/images/${destination.image}`" :alt="destination.name">
                </div>
              </div>
            </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import SourceData from '@/data.json'

export default {
  name: 'Home',
  data(){
    return{
      destinations: SourceData.destinations
    }
  }
}
</script>
<style scoped>
.card-body img {
  max-width: 100%;
  height: auto;
}
</style>
