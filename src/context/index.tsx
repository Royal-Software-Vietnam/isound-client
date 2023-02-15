import React, {useEffect, useState} from "react"
import Loading from "../components/Loading"
import { getCurrentUser } from "../services"

const App = React.createContext<{
    user?: any,
    setUser?: any,
    setLoading?: any,
}>({})

export default function AppProvider ({children}:{children:React.ReactNode}) {
    const [user, $user] = useState<any>(null)
    const [ready, $ready] = useState<boolean>(true)
    const [loading, $loading] = useState<boolean>(false)

    useEffect(() => {
        const run = async () => {
            // checking user:
            // const currentUser = await getCurrentUser()
            // $user(currentUser.data)
        }; run().finally(() => $ready(true))
    }, [])

    return <App.Provider value={{user, setUser:$user, setLoading: $loading}}>
        { ready ? children:null }
        {loading ? <Loading/> : null}
    </App.Provider>
}

export const useApp = () => React.useContext(App)