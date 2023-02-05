<template>
  <div style="text-align: center">
    <h1 ></h1>
    <h2 >Olá, Trabalho como {{ profissao }} </h2>
    <MultiplosEventos />
  </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';

export default {
  name: "PrimeiroComponente",
  components: {
    MultiplosEventos
  },
  data() {
    return {
      profissao: "Programador"
    };
  },
};
</script>