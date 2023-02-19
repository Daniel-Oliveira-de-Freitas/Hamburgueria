<template>
<div class="container">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pronetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ["esta_logado"]
}
</script>

<style scoped>



ul{
    list-style: none;
    display: flex;
    background-color: black;
    height: 50px;

    margin-top: 0;

}
li{
    margin-right: 10px;
    margin-top:  15px;
    
}
a{
    color: #DDD;
    text-decoration: none;
    transition: .5s;

}
a:hover{
    color: turquoise;
}


</style>