<template>
<div >
    <form action="" @submit="enviarFormulario($event)">
        <div>
       <input type="text" v-model="name">
        </div>
        <div>
       <input type="text" v-model="email">
        </div>
        <div>
        <Submit/>
        </div>
    </form>
    </div>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';
export default {
    name: 'Form',
    components:{
        InputText,
        Submit
    },
    data(){
        return{
            name: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(e){

            e.preventDefault();

            const name = this.name;
            const email = this.email;
            console.log('Formulario enviado!');
            console.log('O nome é: ' + name);
            console.log('O email é: ' + email);

            // processos a serem feitos

            // fazer a requisição com ajax

            // e inserir no banco de dados



            
        }
    }
}
</script>