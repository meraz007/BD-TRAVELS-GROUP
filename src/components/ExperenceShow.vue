<template>
<div class="card mb-3" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-6">
      <img :src="`/images/${experience.image}`" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">{{experience.name}}</h5>
        <p class="card-text">{{experience.description.slice(0,420)}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SourceData from '@/data.json'
export default {
    props:{
        id:{
            type:Number,
            required:true
        },
        experienceSlug:{
            type:String,
            required:true
        }
    },
    computed:{
        destination(){
            return SourceData.destinations.find(
                destination =>destination.id===this.id
            )
        },
        experience(){
            return this.destination.experiences.find(
                experience=>experience.slug===this.experienceSlug
            )
        }
    }
}
</script>