<template>
    <ul>
            <!-- <li -->
             <!-- v-for="todItem in todoList" :key=" todItem.id " class="d-flex justify-content-between aling-items-center"> -->
                <!-- <span>{{ todoItem.text }}</span> -->
                <!-- <button class="sm red" @click="deleteItem(todoItem)">Sil</button> -->
            <!-- </li> -->
           <TodoListItem v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>
        </ul>
</template>
<script>
    import TodoListItem from "@/components/TodoListItem";
   export default {
    props : ["myData"],
    // props :{
    //     myData: {
    //         type : String,
    //         required : false,
    //         default : "",
    //     },
    // },
    components :{
        TodoListItem
    },
   };
</script>