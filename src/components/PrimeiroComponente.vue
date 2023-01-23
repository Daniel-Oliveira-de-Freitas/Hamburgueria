<template>
  <div style="text-align:center">
    <h1>Olá Vue!!</h1>
    <h2 style="color:blue">Meu nome é {{ nome }} e trabalho como {{ profissao }}</h2>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Daniel",
      profissao: 'Programador'
    };
  },
};
</script>