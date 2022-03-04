<template>
    <router-link to="/">
        <div class="card border-0">
            <div class="card-body">
                <h5 class="card-title">{{experence.name}}</h5>
                <img :src="`/images/${experence.image}`" :alt="experence.name">
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        experence:{
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