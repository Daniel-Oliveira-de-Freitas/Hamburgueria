<template>
<div class="container">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pronetos</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

  

ul{
    list-style: none;
    display: flex;
    background-color: #999;
}
li{
    margin-right: 10px;
    
    
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