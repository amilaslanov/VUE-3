<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <hr>
        <div id="content my-2">
           <slot name="content"/>
        </div>
        <slot />
        <hr>
        <div class="footer text-right">
           <slot name="footer"/>
        </div>
    </div>
</template>
<script>
   export default {
    props : ["onSave"]
   }
</script>