

const Main = {
    init: function(){
        this.cacheSelectors() //SELECIONA TODOS OS ITEMS NECESSARIO
        this.bindEvents() //executa neste o eventos

    },

    cacheSelectors: function(){
        this.checkButtons = document.querySelectorAll('.check')

    },

    bindEvents: function(){
        const self = this
        this.checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })

    },

    Events: {
        checkButton_click: function(){
            alert('ok')

        }
    },

}

Main.init()