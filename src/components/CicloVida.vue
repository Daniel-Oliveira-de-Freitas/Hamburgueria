<template>
    <div>
    <h3>Meu nome é: {{ nome }} </h3>
    </div>
</template>

<script>
export default {
    name: 'CicloVida',
    
    data(){
        return{
            nome: 'Daniel'
        }
    },
    created(){
        setTimeout(() => {
            this.nome = 'Oliveira de Freitas'
        }, 1000);
        this.lifeCivle()
    },
    
    mounted(){
        setTimeout(() => {
            this.nome = 'Daniel Oliveira de Freitas'
        }, 2000);
        this.lifeCivle()
    },
    methods:{
        lifeCivle(){
            console.log("Executou!")
        }
    }
   
    
}
</script>