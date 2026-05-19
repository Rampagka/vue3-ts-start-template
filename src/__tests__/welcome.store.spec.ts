import { useWelcomeStore } from '@/modules/welcome/store/welcome.store'

import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useWelcomeStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('starts at zero', () => {
        const store = useWelcomeStore()
        expect(store.count).toBe(0)
    })

    it('increments', () => {
        const store = useWelcomeStore()
        store.increment()
        expect(store.count).toBe(1)
    })

    it('decrements', () => {
        const store = useWelcomeStore()
        store.decrement()
        expect(store.count).toBe(-1)
    })
})
