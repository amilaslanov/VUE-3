<template>
  <div class="container">
   <UserSection />
  </div>
</template>
<script>
import UserSection from "./components/UserSection.vue";
 export default {
  components : {
    UserSection
  },
    data() {
        return {
          provideData :{
            userList : ["Amil","Dasqin","Asim","Alim"]
          },
        };
    },
    methods: {
      newItem(item){
        this.provideData.userList.push(item)
      },
    },
    provide(){
      return{
          userList : this.provideData.userList,
          newItem : this.newItem
      };
    },
};
</script>

