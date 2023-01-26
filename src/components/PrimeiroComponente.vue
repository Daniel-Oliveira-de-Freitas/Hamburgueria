<template>
  <div style="text-align: center">
    <h1 ></h1>
    <h2 >Olá, Trabalho como {{ profissao }} </h2>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      profissao: "Programador"
    };
  },
};
</script>