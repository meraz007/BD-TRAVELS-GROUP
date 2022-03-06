<template>
<div class="row justify-content-center">
    <div class="col-md-8">
        <GoBack />
        <div class="card mb-3">
            <div class="row">
                <div class="col-md-6">
                    <img :src="`/images/${destination.image}`" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">{{destination.name}}</h5>
                        <p class="card-text">{{destination.description.slice(0,420)}}</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>
    <div class="experence">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h3>All Experence in {{destination.name}}</h3>
                <div class="row">
                    <div class="col-md-3" v-for="experience in destination.experiences"
                    :key="experience.slug">
                    <router-link class="nav-link" :to="{name:'experience',params:{experienceSlug:experience.slug}}">
                    <Experence
                    :experience="experience"/>
                    </router-link>
                    </div>
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import SourceData from '@/data.json'
import Experence from '../components/Experences.vue'
import GoBack from '../components/GoBack.vue'
export default {
    components:{
        Experence,
        GoBack
    },
  computed:{
    destinationId(){
        return parseInt(this.$route.params.id)
    },
    destination(){
        return SourceData.destinations.find(destination =>destination.id===this.destinationId)
    }
  }
}
</script>

<style scoped>
.style1 {
  max-width: 100%;
  height: auto;
}
</style>