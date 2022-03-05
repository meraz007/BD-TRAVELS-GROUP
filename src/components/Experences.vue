<template>
    <div class="card border-0">
        <div class="card-body">
            <h5 class="card-title">{{experience.name}}</h5>
            <img :src="`/images/${experience.image}`" :alt="experience.name">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        experience:{
            type:Object,
            required:true
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