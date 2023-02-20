
<template>
   <Navbar :logo="logo_src" :alt="app_name" />
  <RouterView />
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return {
      logo_src: './img/logo.png',
      app_name: 'Hamburgueria'
    }
  }
}
</script>

<style>
*{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container{
  margin: 50px;
  min-height: 250px;
}

h1{
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px;
  color: #222;
}

</style>



