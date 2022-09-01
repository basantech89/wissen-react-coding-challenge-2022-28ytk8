import { getItem } from '.'

declare interface APIOptions {
  method?: 'GET' | 'POST'
  data?: object
  shouldAuthenticate?: boolean
}

const apiCall = (url: string, options?: APIOptions): Promise<Response> => {
  const headers: HeadersInit = {
    'Content-type': 'application/json; charset=UTF-8',
  }

  if (options?.shouldAuthenticate) {
    const token = getItem('token')
    headers.Authorization = `Bearer ${token}`
  }

  const fetchOptios: Record<string, any> = {
    method: options?.method ?? 'GET',
    headers,
  }

  if (options?.data) {
    fetchOptios.body = JSON.stringify(options.data)
  }

  return fetch(url, fetchOptios).then(res => res.json())
}

export const authenticateUser = (
  email: string,
  password: string
): Promise<any> =>
  apiCall('https://reqres.in/api/login', {
    method: 'POST',
    data: { email, password },
  })

export const fetchUsers = (): Promise<any> =>
  apiCall('https://reqres.in/api/unknown', { shouldAuthenticate: true })
