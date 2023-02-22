<template>
    <div id="main-banner">
        <h1>Hamburgueria</h1>
    </div>
</template>

<script>
export default {
    name:'Banner'
    
}
</script>
<style>
    #main-banner{
        background-image: url('/img/baner.webp');
        background-position: 250px -200px;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h1{
        color: #FCBA03;
        font-size: 70px;
        font-weight: bold;
        text-align: center;
        padding: 20px 40px;
        background-color: #222;
    }


</style>