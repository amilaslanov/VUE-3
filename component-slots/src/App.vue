<template>
  <Modal>
    <template #title>
         <h2>Slot ile gelen bilgi </h2>
    </template>
    <template #content>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rerum tenetur adipisci doloremque 
                placeat repellendus tempore temporibus quod autem 
                illum totam, maxime nesciunt accusantium,
                cum ad, ipsam ratione dolores architecto nulla!
            </p>
           </template>
           <template #footer>
             <button class="red">Iptal</button>
            <button @click="onSave" class="green">Saxla</button>
           </template>
           <template #default>
            Bu default gosterilsin
           </template>
  </Modal>
</template>
<script>
import Modal from '@/components/Modal.vue';
 export default {
  components :{
    Modal
  },
  methods: {
    onSave(){
      alert("Saved!")
    }
  },
}
</script>