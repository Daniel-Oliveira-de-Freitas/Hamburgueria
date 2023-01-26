<template>
  <div >
  <Picture/>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades</p>
    <p v>Para desenvolver este projeto Utilizo as segintes tecnologias:</p>
    <p></p>
    <ul>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>VUE.Js</li>
    </ul>
    <div>
      <button @click="ShowEmail" >{{txtBotao}}</button>
    </div>
    <div>
    <p v-show="mostrar_email">Mande uma mesagem para: {{ email }} </p>
  </div>
    <p class="teste">Para acessar meu portifólio =><a v-bind:href="link_gitHub" target="_blank" > basta clicar aqui!</a></p>
  </div>
</template>

<script>
import Picture from "./Picture.vue"

export default {
  name: "Info",
components:{
  Picture
},

  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: 'danisnake27@gmail.com',
      link_gitHub: 'https://github.com/Daniel-Oliveira-de-Freitas',
      txtBotao: "Mostar Email"
    };
  },

  methods:{
    ShowEmail(){
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email){
        this.txtBotao = "Mostar Email"
      }else{
        this.txtBotao = "Esconder Email"
      }
    }
  }
};
</script>