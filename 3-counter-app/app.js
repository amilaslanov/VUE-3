const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            counter2 :0,
        };
    },
    methods: {},

    computed : {
        getCounterResult(){
            console.log("counter1 calisti")
          return this.counter >5 ? "boyuk" : "kicik";
        },
        getCounter2Result(){
            console.log("counter2 calisti")
            return this.counter2 >5 ? "boyuk" : "kicik";
          },
    },
    watch :{
        counter (newValue , oldValue){
            console.log(oldValue, "=>", newValue)
        }
    }
}).mount("#app");