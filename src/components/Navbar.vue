<template>
<nav id="nav">

    <Router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </Router-link>    
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
        <RouterLink to="/cadastroClientes">Cadastro</RouterLink>
        <RouterLink to="/login">Login</RouterLink>

    </nav>
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>
<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }

    #logo{
        width: 40px;
        height: 40px;
    }
    #nav a{
        color: #fcba03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover{
        color: #fff;
    }
</style>