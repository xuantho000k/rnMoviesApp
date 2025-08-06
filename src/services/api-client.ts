import { create, ApisauceInstance } from 'apisauce'

export const createApiClient = (baseURL: string) => {
  const api: ApisauceInstance = create({
    baseURL,
    timeout: 10000
  })

  const get = <T>(url: string, params?: object) => api.get<T>(url, params)
  const post = <T>(url: string, data?: object) => api.post<T>(url, data)

  return { get, post, api }
}