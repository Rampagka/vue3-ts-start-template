export function useLocalStorage<T>(key: string, initialValue: T) {
    const stored = localStorage.getItem(key)
    const state = ref<T>(stored !== null ? (JSON.parse(stored) as T) : initialValue)

    watch(
        state,
        (value) => {
            localStorage.setItem(key, JSON.stringify(value))
        },
        { deep: true },
    )

    return state
}
