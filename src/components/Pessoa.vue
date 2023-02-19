<template>
  <div >
    <h3 >
    <CicloVida />
    </h3>
    <Info :email="email" :esta_trabalhando=false />
    <Form/>
    
  </div>
</template>

<script>
import Info from './Info.vue'
import CicloVida from './CicloVida.vue'
import Form from './Form.vue'
export default {
  name: "Pessoa",
  components: {
    Info,
    CicloVida,
    Form
  },
  data() {
    return {
      nome: "Daniel",
      email: 'danisnake27@gamil.com'
    };
  },
};
</script>