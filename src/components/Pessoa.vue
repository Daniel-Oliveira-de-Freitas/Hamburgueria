<template>
  <div >
    <h3 >
    <CicloVida />
    </h3>
    <Info/>
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
    };
  },
};
</script>