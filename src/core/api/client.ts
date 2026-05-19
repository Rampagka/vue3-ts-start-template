type RequestOptions = Omit<RequestInit, 'body'> & { body?: unknown }

const BASE_URL = import.meta.env.VITE_API_URL ?? ''

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const { body, headers, ...rest } = options

    const response = await fetch(`${BASE_URL}${url}`, {
        headers: { 'Content-Type': 'application/json', ...headers },
        body: body !== undefined ? JSON.stringify(body) : undefined,
        ...rest,
    })

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json() as Promise<T>
}

export const apiClient = {
    get: <T>(url: string, options?: RequestOptions) =>
        request<T>(url, { method: 'GET', ...options }),
    post: <T>(url: string, body: unknown, options?: RequestOptions) =>
        request<T>(url, { method: 'POST', body, ...options }),
    put: <T>(url: string, body: unknown, options?: RequestOptions) =>
        request<T>(url, { method: 'PUT', body, ...options }),
    delete: <T>(url: string, options?: RequestOptions) =>
        request<T>(url, { method: 'DELETE', ...options }),
}
