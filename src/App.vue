<template>
    <div id="app">
        <h1>Monty Hall Problem</h1>
        <!-- Coloacando : no parametro, o valor é passado como boolean, mesmo entre chaves -->
        <div class="form">
            <!--  Conteudo aparece somente quando não startado -->
            <div v-if="!started">
                <label for="doorsAmount">Quantas portas?</label>
                <!-- Salvando o doorsAmounted como um valor numerico -->
                <input type="text" id="doorsAmount" size="3" v-model.number="doorsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual porta é premiada?</label>
                <!-- Salvando a porta selecionada como um valor numérico -->
                <input type="text" id="selectedDoor" size="3" v-model.number="selectedDoor">
            </div>
            <!-- Aplicando started para true -->
            <button v-if="!started" @click="started = true">Iniciar</button>
            <!-- Aplicando started para false -->
            <button v-if="started" @click="started = false">Reiniciar</button>

        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
                <!-- :number operando i como um valor numerico -->
                <Door :hasGift="i === selectedDoor" :number="i"/>
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door },
    data: function () {
        return {
            // Com o jogo inicializado aparece o formulario, senao aparecem as portas
            started: false,
            //  Quantidade de portaas
            doorsAmount: 3,
            selectedDoor: null
        }
    }
}
</script>

<style>

* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #FFF;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
}

</style>