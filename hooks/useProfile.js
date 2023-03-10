import useSWR from "swr"
import { fetcher } from "@/services/client-side"

export default function useProfile() {
    
    const { data, error } = useSWR(`http://127.0.0.1:8000/api/auth/user-profile`, fetcher)
    
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}