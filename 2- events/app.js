const app =  Vue.createApp({
    data() {
        return {
            fullName: "sasas"
        };
    },
    methods: {
        updateValue(event){
            console.log(event.target.value);
        },
    },
}).mount("#app");