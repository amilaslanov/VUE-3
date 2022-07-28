<template>
  <app-header />
    <div class="container-sm">
        <h3>Bu menim ilk uygulamam</h3>
    </div>
  <CounterItem />
</template>


<script>
  import CounterItem from "@/components/CounterItem";
  
  export default{
    components :{
      CounterItem : CounterItem,
    },
  };
</script>