<template>
    <div class="img">
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue';

export default {
    name:'Picture',
    components:{
        MudarImagem
    },
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Daniel O. d F."
        }
    },
    methods:{
        trocarImagem(){
           this.avatar = "/img/avatar2.png"
        }
    }
}
</script>

<style scoped>
    .img{
        text-align: center;
    }
</style>