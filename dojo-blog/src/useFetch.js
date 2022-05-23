// make sure name start with use... useSMTH ... else it wont work
// we are creating a custom hook
import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true) // so we know that fetch is still running
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(url) // fetch data from DB
        .then((res)=> {
            if(!res.ok){ // res.ok checks if we found a response or if there was an error
                throw Error("Could not find the resource") // we throw error here and catch block catches it
            }
            return res.json() // convert to json format 
        })
        .then((data) => { // we have data here 
            console.log(data)
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message) 
            setIsPending(null)})
    }, [url])
    return { data, isPending, error}
}

export default useFetch