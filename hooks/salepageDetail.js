import useSWR from "swr"
import { fetcher } from "@/services/client-side"

export default function salepageDetail(id) {
    
    const { data, error } = useSWR(`https://www.zonepang.com/api/salepageDetail/${id}`, fetcher)
    
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}