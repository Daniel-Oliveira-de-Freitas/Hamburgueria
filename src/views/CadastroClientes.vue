<template>
  <h1>Cadastro de Clientes</h1>
  <div>
    <Message :msg="msg" v-show="msg" />
    <form id="form" @submit="cadastro" >
      <div class="input-container">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="nome">Endereço:</label>
        <input type="text" name="endereco" id="endereco" v-model="endereco" placeholder="Digite seu endereço">
      </div>
      <div class="input-container">
        <label for="nome">Email:</label>
        <input type="email" name="email" id="email" v-model="email" placeholder="Digite o seu email">
      </div>
      <div class="input-container">
        <label for="nome">Senha:</label>
        <input type="password" name="senha" id="senha" v-model="senha" placeholder="Digite sua senha">
      </div>

      <div class="input-container">
        <input type="submit" class="btn-submit" value="Cadastrar">
      </div>
    </form>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
export default {
  name: "CadastroClientes",
  components:{
    Message
  },
  data(){
    return{
      nome: null,
      endereco: null,
      email: null,
      senha: null,
      msg: null
    }
  },
  methods:{
    async cadastro(e){
      e.preventDefault();
      const data = {
        nome: this.nome,
        endereco: this.endereco,
        email: this.email,
        senha: this.senha
      }
        const dataJson = JSON.stringify(data);
        const req = await fetch("http://localhost:3000/clientes", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: dataJson
        });
        console.log(dataJson)

        const res = await req.json();
        // mensagem do sistema
        this.msg = `Cliente Nº ${res.id} cadastrado com sucesso!`;
        // limpar mensagem
        setTimeout(() => this.msg = "", 3000)
        // limpa os campos do pedido
        this.nome = "";
        this.endereco = "";
        this.email = "";
        this.senha = "";

    }
  },
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

}

.btn-submit:hover{
  background-color: #222;
  color: #fcba03;

}
</style>