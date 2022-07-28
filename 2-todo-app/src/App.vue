<template>
    <div class="container">
        <h3  class="text-center">ToDo App</h3>
        <hr>
        <AddSection />
        <TodoList :myData="todoList" />
        <ResaultBar />
    </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import TodoList from "@/components/TodoList";
import ResaultBar from "@/components/ResaultBar";

    export default {
    comments: {
        AddSection,
        TodoList,
        ResaultBar
    },
    created() {
       setTimeout(() => {
         this.todoList = [
                { id: 1, text: "VUE JS #1" },
                { id: 2, text: "VUE JS #1.1" },
                { id: 3, text: "VUE JS #1.2" },
                { id: 4, text: "VUE JS #1.3" },
                { id: 5, text: "VUE JS #1.4" },
                { id: 6, text: "VUE JS #1.5" },
        ];
       }, 2000);
    },
    data() {
        return {
            todoList: [],
        };
    },
    provide(){
        return {
            todoList : this.todoList
        };
    },
    methods: {
        deleteItem(todoItem) {
            this.todoList = this.todoList.filter((t) => t != todoItem);
        },
        addNewItem(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value
            });
            event.target.value = "";
        },
    },
    components: { AddSection }
}
</script>