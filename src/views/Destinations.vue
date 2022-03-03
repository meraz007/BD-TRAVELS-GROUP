<template>
    <div class="destinations">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <h1>{{destination.name}}</h1>
                        <img class="img-fluid" :src="`/images/${destination.image}`" alt="">
                    </div>
                    <div class="col-md-6">
                        <p>{{destination.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SourceData from '@/data.json'
export default {
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