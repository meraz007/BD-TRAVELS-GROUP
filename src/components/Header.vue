<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">BD TRAVELS GROUP</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"
        v-for="destination in destinations" 
        :key="destination.id"
        >
          <router-link 
          :to="{name:'destination',params:{id:destination.id}}"
          class="nav-link"
          >{{destination.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import SourceData from '@/data.json'
export default {
  name: 'Header',
  data(){
    return{
      destinations:SourceData.destinations
    }
  }
}
</script>

<style scoped>
</style>
