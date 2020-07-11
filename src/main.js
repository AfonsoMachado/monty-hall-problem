import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)

    // mesma coisa
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app") //Renderizando a aplicação no arquivo index.html