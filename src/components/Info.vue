<template>
  <div >
  <Picture/>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades</p>
    <p >Utilizo as segintes tecnologias para backend:</p>
    <p></p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" :key="index"> {{technology}} </li>
    </ul>
    <p >Utilizo as segintes tecnologias para frontend:</p>
    
    <ul > 
      <li v-for="technology in frontend_technologies" :key="technology.id">{{technology.language}} </li>
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

props:{
  email: String,
  esta_trabalhando: Boolean
},

  data() {
    return {
      mostrar_email: false,
      link_gitHub: 'https://github.com/Daniel-Oliveira-de-Freitas',
      txtBotao: "Mostar Email",
      backend_technologies: ['JavaScript', 'PHP', 'Python'],
      frontend_technologies:[
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'Vue'},
      ]
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