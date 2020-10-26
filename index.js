Vue.component('message', {
    props: ['data'],
    template: '<p>{{data}}</p>'
})

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    },
});