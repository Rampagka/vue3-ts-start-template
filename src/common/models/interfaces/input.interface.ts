export interface IBaseInput {
    type: 'text' | 'password' | 'tel' | 'email' | 'number' | 'search'
    placeholder?: string
    error?: boolean | string
    disabled?: boolean
    prefix?: string
    suffix?: string
    label?: string
}
