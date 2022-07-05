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
           this.todoList.push({
               id : new Date().getTime(),
               text : event.target.value,
               completed : false,
           });
           event.target.value='';
       },
       removeItem(todoItem){
        this.todoList = this.todoList.filter((todo) => todo !=todoItem);
       }
   },
   computed : {
       completedItemCount(){
           return this.todoList.filter((t) => t.completed).length;
       },
       uncompletedItemCount(){
           return this.todoList.filter((t) => !t.completed).length;
       },
   },
   
}).mount('#app');