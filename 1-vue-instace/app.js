const app = Vue.createApp({
    data(){
        return{
            title : "Vue.js Bootcamp",
        };
    },
    methods: {
        changetitle(atitle){
            this.title=atitle;
        }
    },
}).mount("#app");