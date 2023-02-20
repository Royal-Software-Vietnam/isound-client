import React, {useEffect, useState} from "react"
import Loading from "../components/Loading"
import { getCurrentUser } from "../services"

const App = React.createContext<{
    user?: any,
    setUser?: any,
    setLoading?: any,
    voiceSearch?: any,
    setVoiceSearch?: any
}>({})

export default function AppProvider ({children}:{children:React.ReactNode}) {
    const [user, setUser] = useState<any>(null)
    const [ready, setReady] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const [voiceSearch, setVoiceSearch] = useState<boolean>(false) 

    useEffect(() => {
        const run = async () => {
            // checking user:
            const currentUser = await getCurrentUser()
            setUser(currentUser.data)
        }; run().finally(() => {
            setLoading(false)
            setReady(true)
        })
    }, [])

    return <App.Provider 
        value={{user, setUser, setLoading, voiceSearch, setVoiceSearch}}>
        { ready ? children:null }
        {loading ? <Loading/> : null}
    </App.Provider>
}

export const useApp = () => React.useContext(App)