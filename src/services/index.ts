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

export const getCurrentUser = () => {
    /* @ts-ignore */
    let { accessToken }:any = JSON.parse(localStorage.getItem('auth'))

    return axios.get("http://localhost:8888/user/profile", { headers: {
        access_token: accessToken || 'empty'
} })
}

export const addToFavoriteList = (favorite_list_id:string, audio_id:string) => {
    return userService.put(`/favorite/${favorite_list_id}`, { audio_id })
}

export const signin = ({ email, password }:{ email:string, password:string }) => {
    return basicService.post('/user/signin', { email, password })
}

export const signup = ({ username, password, email }:{ username:string, password:string, email:string }) => {
    return basicService.post('/user/signup', { username, password, email })
}

export const get_topRateData = () => {
    return basicService.get("/audio/toprate")
}

export const search = (keyword:string) => {
    return basicService.get("/audio/search", {
        params: {
            keyword
        }
    })
}