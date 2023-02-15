import axios, {AxiosRequestConfig, AxiosResponse, AxiosInstance} from "axios";

const BASIC_SERVICE = (url:string) => {
    const axiosInstance:AxiosInstance = axios.create({ baseURL: url })
    return axiosInstance
}
const USER_SERVICE = (url:string) => {
    const axiosInstance:AxiosInstance = axios.create({ baseURL: url })
    // @ts-ignore
    axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
        // @ts-ignore
        const user:any = window?.user
        if (user?.accesstoken) {
            // @ts-ignore
            request.headers['Authorization'] = `Bearer ${user?.accesstoken}`
        }
        return request
    })

    axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
        if (response.status == 401) {
            // Sign out here
            window.location.reload()
        }
        return response
    }, async (error) => {
        if (error.response) {
            if (error.response?.status === 401) {
                // Sign out here
                window.location.reload()
            }
            return {
                status: error.response?.status || 400,
                data: error.response?.data
            }
        }
        return Promise.reject(error)
    })
    return axiosInstance
}

const userService = USER_SERVICE("http://localhost:8888")
const basicService = BASIC_SERVICE("http://localhost:8888")

export const getCurrentUser = async () => await axios.get("http://localhost:8888/user-profile", { headers: {} })

export const addToFavoriteList = (favorite_list_id:string, audio_id:string) => {
    return userService.put(`/favorite/${favorite_list_id}`, { audio_id })
}

export const signin = ({ username, password }:{ username:string, password:string }) => {
    return basicService.post('/user/signin', { username, password })
}

export const signup = ({ username, password, email }:{ username:string, password:string, email:string }) => {
    return basicService.post('/user/signup', { username, password, email })
}