export const useWelcomeStore = defineStore('welcome', () => {
    const count = ref(0)

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    return { count, increment, decrement }
})
