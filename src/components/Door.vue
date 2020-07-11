<template>
    <!-- Inteface gráfica da porta -->
    <div class="door-area">
        <div class="door-frame">
            <!-- Presente só é renderizado se a porta estiver aberta e se o hasGift for verdadeiro -->
            <Gift v-if="open && hasGift"/>
        </div>
        <!-- Selecionando a porta no click -->
        <div class="door" @click="selected = !selected">
            <div class="number">{{ number }}</div>
            <div class="knob"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'

export default {
    name: 'Door',
    components: { Gift },
    props: {
        number: {},
        hasGift: { type: Boolean }
    },
    data: function () {
        // No momento de criação da porta, a mesma não está nem aberta e nem fechada
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>

/* Definindo variaveis */
:root {
    --door-border: 5px solid brown;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #AAA;
    margin-bottom: 20px;
    font-size: 3rem;

    display: flex;
    justify-content: center;
}

.door-frame {
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 60px;
}

</style>