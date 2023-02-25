<template>
<div id="table">
  <Message :msg="msg" v-show="msg" />
  <div>
    <div id="table-heading">
      <div class="order-id">#:</div>
      <div>Cliente:</div>
      <div>Pão:</div>
      <div>Carne:</div>
      <div>Opcionais:</div>
      <div>Ações:</div>
    </div>
  </div>
  <div id="table-rows">
    <div class="table-row" v-for="burger in burgers" :key="burger.id">
      <div class="order-number">{{ burger.id }}</div>
    <div>{{ burger.nome }}</div>
    <div>{{ burger.pao }}</div>
    <div>{{ burger.carne }}</div>
    <div>
      <ul>
        <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
      </ul>
    </div>
    <div>
      <select name="status" class="status" @change="updatePedido($event, burger.id)">
        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{ s.tipo }}</option>
      </select>
      <button class="delete-btn" @click="deletePedido(burger.id)">Cancelar</button>
    </div>
    </div>
  </div>
</div>


</template>

<script>
import Message from "@/components/Message.vue";
export default {
  name: "Dashbooard",
  data() {
    return {
      burgers: null,
      burgers_id: null,
      status: [],
      msg: null
    }
  },
  components:{
    Message
  },
  methods:{
    async getPedidos(){
      const req = await fetch("http://localhost:3000/burgers");
      const data = await req.json();
      this.burgers = data;

      // resgata o status
      this.getStatus();

    },
    async getStatus(){
      const req = await fetch("http://localhost:3000/status");
      const data = await req.json();
      this.status = data;
    },

    async deletePedido(id){
      if (confirm("Deseja deletar este pedido!") == true) {
        const req = await fetch(`http://localhost:3000/burgers/${id}`, {
          method: "DELETE",
        });

        const res = await req.json();
        this.msg = `Pedido foi deletado com sucesso!`;
        setTimeout(() => this.msg = "", 3000)
        this.getPedidos();
      }else{

        this.msg = `Pedido não foi deletado!`;
        setTimeout(() => this.msg = "", 3000)

      }
    },

    async updatePedido(event, id){
      const option = event.target.value;

      const dataJson = JSON.stringify({status: option});
      const req = await fetch(`http://localhost:3000/burgers/${id}`,{
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: dataJson
      });
      const res = await req.json();

      this.msg = `Pedido Nº ${res.id} atualizado para ${res.status}!`;
      setTimeout(() => this.msg = "", 3000)
    }
  },
  mounted() {
    this.getPedidos();
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
   background-color: #4682B4;
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