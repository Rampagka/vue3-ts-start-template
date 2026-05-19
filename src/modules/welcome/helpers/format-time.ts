export function formatRelativeDate(timestampSeconds: number, locale?: string): string {
    const date = new Date(timestampSeconds * 1000)
    const now = new Date()

    const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()

    if (isToday) {
        return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
    }

    if (date.getFullYear() === now.getFullYear()) {
        return date.toLocaleDateString(locale, { day: 'numeric', month: 'short' })
    }

    return date.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
}
