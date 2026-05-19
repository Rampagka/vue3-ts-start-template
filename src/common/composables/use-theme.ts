import { useLocalStorage } from '@/common/composables/use-local-storage'

type Theme = 'light' | 'dark'

const theme = useLocalStorage<Theme>('theme', 'light')

watch(
    theme,
    (value) => {
        document.documentElement.setAttribute('data-theme', value)
    },
    { immediate: true },
)

export function useTheme() {
    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return { theme: readonly(theme), toggleTheme }
}
