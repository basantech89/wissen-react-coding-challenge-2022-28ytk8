export const getItem = (key: string) => localStorage.getItem(key);
export const setItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeItem = (key: string) => localStorage.removeItem(key);

declare interface APIOptions {
  method?: 'GET' | 'POST';
  data?: object;
  shouldAuthenticate?: boolean;
}

const apiCall = (url: string, options?: APIOptions): Promise<Response> => {
  const { method, data, shouldAuthenticate } = options;

  const headers: HeadersInit = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  if (shouldAuthenticate) {
    const token = getItem('token');
    headers.Authorization = `Bearer ${token}`;
  }

  const fetchOptios: Record<string, any> = {
    method: method ?? 'GET',
    headers,
  };

  if (data) {
    fetchOptios.body = JSON.stringify(data);
  }

  return fetch(url, fetchOptios).then((res) => res.json());
};

export const authenticateUser = (
  email: string,
  password: string
): Promise<any> =>
  apiCall('https://reqres.in/api/login', {
    method: 'POST',
    data: { email, password },
  });

export const fetchUsers = (): Promise<any> =>
  apiCall('https://reqres.in/api/unknown', { shouldAuthenticate: true });
