const Counter = {
    data() {
        return {
            counter: 0,
            shouldCount: false
        }
    },
    mounted() {
        setInterval(() => {
            this.shouldCount ? this.counter++ : null
        }, 250)
    },
    methods: {
        toggleCount() {
            this.shouldCount = !this.shouldCount;
        }
    },
};

Vue.createApp(Counter).mount('main');