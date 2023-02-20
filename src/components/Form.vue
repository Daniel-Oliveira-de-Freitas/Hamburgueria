<template>
    <div>
        <p>Componente de mensagem</p>
    <div>
        <form id="form">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Escolha o tipo de pão:</label>
                <select name="pao" id="pao" v-model="pao" >
                <option value="">Selecione o seu pão</option>
                <option value="integral">Integral</option>
                </select>
            </div>
            <div class="input-container">
                <label for="pao">Escolha o tipo de carne:</label>
                <select name="carne" id="carne" v-model="carne" >
                <option value="">Selecione sua carne</option>
                <option value="maminha">Maminha</option>
                </select>
            </div>
            <div id="opcionais-container" class="input-container">
                <label for="opcionais-title" >Itens opcionais:</label>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="salame">
                    <span>Salame</span>
                    <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="salame">
                    <span>Salame</span>
                    <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="salame">
                    <span>Salame</span>
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
export default {
name: "Form"    
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
   border-left: 4px solid #FCBA03; 
}

input, select{
    padding: 5px 10px;
    width: 300px;
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
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    padding: 10px;
    font-size: 15px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 5px;
    transition: .5s;
}

.btn-submit:hover{
    background-color: #FCBA03;
    color: #222;
}
</style>