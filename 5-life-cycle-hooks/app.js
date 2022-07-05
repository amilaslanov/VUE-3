const app = Vue.createApp({
    data() {
        return {
            title : "Test Basligi",
        }
    },
    beforeCreate() {
        console.log('beforeCreate Isledi..')
    },
    created() {
        console.log(' created Isledi..')
    },
    beforeMount() {
        console.log('beforeMount Isledi..')
    },
    mounted() {
        console.log('mounted Isledi..')
    },
    beforeUpdate() {
        console.log('beforeUpdate Isledi..')
    },
    updated() {
        console.log('updated Isledi..')
    },
    beforeUnmount() {
        console.log('beforeUnmount Isledi..')
    },
    unmounted() {
        console.log('unmounted Isledi..')
    },
});
app.mount('#app');  