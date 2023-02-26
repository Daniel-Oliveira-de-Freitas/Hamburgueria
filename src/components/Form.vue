<template>
    <div>
      <Message :msg="msg" v-show="msg" />
    <div>
        <form id="form" @submit="criarPedido" >
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Escolha o tipo de pão:</label>
                <select name="pao" id="pao" v-model="pao">
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="pao">Escolha o tipo de carne:</label>
                <select name="carne" id="carne" v-model="carne" >
                <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
                </select>
            </div>
            <div id="opcionais-container" class="input-container">
                <label for="opcionais" id="opcionais-title" >Itens opcionais:</label>
                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <input  type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{opcional.tipo}}</span>
                </div>
            </div>
            <div class="input-container">
                <input type="submit" class="btn-submit" value="Criar meu pedido!">
            </div>
        </form>
    </div>
    </div>   
</template>

<script>
import Message from "@/components/Message.vue";


export default {
name: "Form",
  components: {
    Message,
  },
data(){
  return {
    paes: null,
    carnes: null,
    opcionaisdata: null,
    nome: null,
    pao: null,
    carne: null,
    opcionais: [],
    msg: null
  }
},
  methods:{
    async getIngredientes(){
      const req = await fetch("http://localhost:3000/ingredientes")
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async criarPedido(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado"
      }
      if (data.nome != null && data.pao != null && data.carne != null) {
        const dataJson = JSON.stringify(data);
        const req = await fetch("http://localhost:3000/burgers", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: dataJson
        });
        const res = await req.json();
        // mensagem do sistema
        this.msg = `Pedido Nº ${res.id} realizado com sucesso!`;
        // limpar mensagem
        setTimeout(() => this.msg = "", 3000)
        // limpa os campos do pedido
        this.nome = "";
        this.pao = "";
        this.carne = "";
        this.opcionais = "";

      }else{
        this.msg = "O nome do cliente, pão e carne são obrigatórios"
        setTimeout(() => this.msg = "", 3000)
      }
    }
    },

  mounted() {
  this.getIngredientes()
  },

}
</script>

<style scoped>
#form{
    max-width: 400px;
    margin: 0 auto;
    
    
}

.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label{
   font-weight: bold;
   margin-bottom: 15px;
   color: #222;
   padding: 5px 10px;
   border-left: 4px solid #fcba03;
}

input, select{
    padding: 5px 10px;
    width: 98%;
}

#opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;
}

#opcionais-title {
    width: 100%;
}

.checkbox-container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}

.checkbox-container span ,
.checkbox-container input{
    width: auto;
}

.checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
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
    color: #4682B4;

}
</style>