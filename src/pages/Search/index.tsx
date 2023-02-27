import { get_search } from "../../services"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useApp } from "../../context";

export default function Search () {

    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('keyword')
    const { setLoading } = useApp()
    const [data, setData] = useState([])

    const getDataByKeyword = async () => {
        setLoading(true)
        try {
            let { data:searchData } = await get_search(keyword as string)
            console.log(searchData)
            setData(searchData)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataByKeyword()
    }, [keyword])

    return <div>
        <h1>Search</h1>
    </div>
}