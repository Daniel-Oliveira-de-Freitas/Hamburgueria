<template>

    <Header :esta_logado="true" />

<div>
<PrimeiroComponente/>
<Pessoa/>
</div>
</template>

<script>
import Header from './components/Header.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import Pessoa from './components/Pessoa.vue';


export default {
    name: 'App',
    components:{
        PrimeiroComponente,
        Pessoa,
        Header
    }
}
        
</script>

<style>
    body{
        background-color: #333;
        color: #fff;
    }
    a{
        color: red;
    }
    .teste{
        background-color: black;
    }
</style>