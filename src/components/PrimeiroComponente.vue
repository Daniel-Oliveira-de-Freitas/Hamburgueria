<template>
    <Reutilizacao/>

  <div style="text-align: center">
    <h1 ></h1>
    <h2 >Olá, Trabalho como {{ profissao }} </h2>
    <MultiplosEventos />

    <Reutilizacao/>
    <Reutilizacao/>
  </div>
    <Reutilizacao/>

</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

export default {
  name: "PrimeiroComponente",
  components: {
    MultiplosEventos,
    Reutilizacao
  },
  data() {
    return {
      profissao: "Programador"
    };
  },
};
</script>