<template>
    <div class="img">
    <img :src="avatar" :alt="descricao">
    </div>
</template>

<script>
export default {
    name:'Picture',
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Daniel O. d F."
        }
    }
}
</script>

<style scoped>
    .img{
        text-align: center;
    }
</style>