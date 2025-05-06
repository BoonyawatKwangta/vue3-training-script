import axios from 'axios'

export const instance = axios.create({
  baseURL: `https://some-domain.com/api/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosError } from 'axios'

// const createInstance = (baseURL: string, version: string = ''): AxiosInstance => {
//   const instance: AxiosInstance = axios.create({
//     baseURL: `${baseURL}/${version}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })

//   // Request interceptor (สำหรับปรับแต่ง request ก่อนส่ง)
//   instance.interceptors.request.use(
//     (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
//       // สามารถปรับแต่ง request ได้ที่นี่ เช่น การเพิ่ม headers Authorization การเพิ่ม header multipart-formdata เป็นต้น
//       return config
//     },
//     (error: AxiosError): Promise<AxiosError> => {
//       console.error('Request error:', error)
//       return Promise.reject(error)
//     }
//   )

//   // Response interceptor (สำหรับปรับแต่ง response ก่อนใช้งาน)
//   instance.interceptors.response.use(
//     (response) => response,
//     (error: AxiosError): Promise<AxiosError> => {
//       // สามารถปรับแต่ง request ได้ที่นี่ เช่น ถ้าเกิด error 401 ให้กลับไปหน้า login เป็นต้น
//       console.error('Response error:', error)
//       return Promise.reject(error)
//     }
//   )

//   return instance
// }

// // ใน Vite environment variables จะต้องมี prefix "VITE_"
// const instance: AxiosInstance = createInstance(
//   import.meta.env.VITE_BASE_URL_MAIN_SERVICE as string,
//   import.meta.env.VITE_BASE_VERSION_MAIN_SERVICE_V1 as string
// )

// export { instance }
