const app = Vue.createApp({
    data() {
        return {
           todoList : [
               {id : 1, text : "Vue Bootcamp hefte 1",completed : false},
               {id : 2, text : "Vue Bootcamp hefte 2",completed : false},
               {id : 3, text : "Vue Bootcamp hefte 3",completed : false},
               {id : 4, text : "Vue Bootcamp hefte 4",completed : false},
               {id : 5, text : "Vue Bootcamp hefte 5",completed : false},
               {id : 6, text : "Vue Bootcamp hefte 6",completed : false},
               {id : 7, text : "Vue Bootcamp hefte 7",completed : false},
           ],
        };
    },
   methods: {
       addTodo(event){
           this.todoList.push(event.target.value);
           event.target.value='';
       }
   },
}).mount('#app');