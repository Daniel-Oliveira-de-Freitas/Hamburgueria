<template>
  <div class="message-container">
   <p> {{ msg }} </p>
  </div>
</template>

<script>
export default {
  name: "MessageE",
  props:{
    msg: String
  }
}
</script>

<style scoped>
  .message-container{
    color: #FF6347;
    background-color: #cce5FF;
    border: 2px solid #b8daff;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
  }
</style>