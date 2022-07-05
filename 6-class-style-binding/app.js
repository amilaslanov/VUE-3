const app = Vue.createApp({
    data() {
        return {
            showBorder : false,
            redBG : false,
            title: ""
        }
    },
    computed : {
        boxClasses(){
           return {border : this.showBorder,red : this.redBG}
        }
    }
}).mount('#app')