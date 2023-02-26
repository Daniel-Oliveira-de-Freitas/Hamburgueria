<template>
  <div id="table">
    <h1>Gerenciamento de Clientes</h1>
    <Message :msg="msg" v-show="msg" />
    <div>
      <div id="table-heading">
        <div class="order-id">#:</div>
        <div>Nome:</div>
        <div>Endereço:</div>
        <div>Email:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="table-rows">
      <div class="table-row" v-for="cliente in clientes" :key="cliente.id">
        <div class="order-number">{{ cliente.id }}</div>
        <div>{{ cliente.nome }}</div>
        <div>{{ cliente.endereco }}</div>
        <div>{{ cliente.email }}</div>
        <div>
          <button class="delete-btn" @click="deleteCli(cliente.id)">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
  name: "Clientes",
  data() {
    return {
      clientes: null,
      clientes_id: null,
      msg: null
    }
  },
  components:{
    Message
  },
  methods:{
    async getClientes(){
      const req = await fetch("http://localhost:3000/clientes");
      const data = await req.json();
      this.clientes = data;

    },
    async deleteCli(id){
      if (confirm("Deseja deletar este cliente!") == true) {
        const req = await fetch(`http://localhost:3000/clientes/${id}`, {
          method: "DELETE",
        });
        const res = await req.json();
        this.msg = `Cliente foi deletado com sucesso!`;
        setTimeout(() => this.msg = "", 3000)
        this.getClientes();
      }else{
        this.msg = `Cliente não foi deletado!`;
        setTimeout(() => this.msg = "", 3000)
      }
    },

  },
  mounted() {
    this.getClientes();
  }
}
</script>

<style scoped>
#table{
  max-width: 1200px;
  margin: 0 auto;

}

#table-heading,
#table-rows,
.table-row {
  display: flex;
  flex-wrap: wrap;

}

#table-heading{
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#table-heading div,
.table-row div{
  width: 19%;
}

.table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
#table-heading .order-id,
.table-row .order-number{
  width: 5%;
}

select{
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn{
  background-color: #fcba03;
  color: #000;
  font-weight: bold;
  padding: 10px;
  font-size: 15px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 5px;
  transition: .5s;

}

.delete-btn:hover{
  background-color: red;
  color: #fff;

}
</style>