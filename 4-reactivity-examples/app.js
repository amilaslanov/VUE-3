const app = Vue.createApp({
    data() {
        return {
            search : "",
            itemList : ["Alma","Armud","Heyva","Ciyelek"],
           // filteredList :[],
        };
    },
    methods: {
        searchList(){
            
            
        },
    },
    computed : {
       filteredList() {
        return this.itemList.filter((i) => i.includes(this.search));
       },
    },
}).mount("#app")