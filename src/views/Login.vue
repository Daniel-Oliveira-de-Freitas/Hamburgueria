<template>
  <h1 id="login">Login</h1>

    <div>
      <form id="form" @submit="fazerLogin" >
        <div class="input-container">
          <label for="nome">Email:</label>
          <input type="email" name="email" id="email" v-model="email" placeholder="Digite o seu email">
        </div>
        <div class="input-container">
          <label for="nome">Senha:</label>
          <input type="password" name="password" id="password" v-model="password" placeholder="Digite sua senha">
        </div>

        <div class="input-container">
          <input type="submit" class="btn-submit" value="Fazer Login">
        </div>
      </form>
    </div>

</template>

<script>
export default {
  name: "Login.vue"
}
</script>

<style scoped>
#form{
  width: 30%;
  margin: 0 auto;


}

.input-container{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}

label{
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input{
  padding: 5px 10px;
  width: 98%;
}
#login{
  margin-top: 5%;
}

.btn-submit{
  background-color: #fcba03;
  color: #000;
  font-weight: bold;
  padding: 10px;
  font-size: 15px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 5px;
  transition: .5s;
  width: 100%;
  margin-bottom: 25.8%;
}

.btn-submit:hover{
  background-color: #222;
  color: #fcba03;

}
</style>