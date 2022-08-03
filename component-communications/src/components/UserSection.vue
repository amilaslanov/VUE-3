<template>
   <ListSection  />
    <AddSection />
</template>

<script>
import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection.vue"
   export default {
    components : {
        ListSection,
        AddSection
    },
    // props : ["userList"],
    // emits :["new-item"]
   };
</script>