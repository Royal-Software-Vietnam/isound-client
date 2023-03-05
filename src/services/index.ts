import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";

const BASIC_SERVICE = (url: string) => {
    const axiosInstance: AxiosInstance = axios.create({ baseURL: url })
    return axiosInstance
}
const USER_SERVICE = (url: string) => {
    const axiosInstance: AxiosInstance = axios.create({ baseURL: url })
    // @ts-ignore
    axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
        // @ts-ignore
        const { accessToken }: any = JSON.parse(localStorage.getItem("auth"))
        if (accessToken) {
            // @ts-ignore
            request.headers['access_token'] = `${accessToken}`
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

const userService = USER_SERVICE("https://isound.cyclic.app")
const basicService = BASIC_SERVICE("https://isound.cyclic.app")

export const getCurrentUser = () => {
    /* @ts-ignore */
    let { accessToken }: any = JSON.parse(localStorage.getItem('auth'))

    return axios.get("https://isound.cyclic.app/user/profile", {
        headers: {
            access_token: accessToken || 'empty'
        }
    })
}


export const signin = ({ email, password }: { email: string, password: string }) => {
    return basicService.post('/user/signin', { email, password })
}

export const signup = ({ username, password, email }: { username: string, password: string, email: string }) => {
    return basicService.post('/user/signup', { username, password, email })
}

export const get_topRateData = () => {
    return basicService.get("/audio/toprate")
}

export const get_search = (keyword: string) => {
    return basicService.get("/audio/search", {
        params: {
            keyword
        }
    })
}

/* <--- [user services] ---> */

interface iCreatePlayListPayload {
    playlist_name:string,
    playlist_description?:string,
    playlist_image?:string,
    playlist_status?:boolean
    playlist_media?:Array<any>
}

export const getAllUserPlaylist = () => userService.get("/playlist")

export const createUserPlaylist = ({
    playlist_name, playlist_description, playlist_image, playlist_status, playlist_media
}:iCreatePlayListPayload) => {
    return userService.post("/playlist", {
        playlist_name, playlist_description, playlist_image, playlist_status, playlist_media
    })
}
