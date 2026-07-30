import { useCallback, useEffect, useState } from "react";

async function makeHttpRequest(url, config) {

    const response = await fetch(url, config);
    const resData = await response.json();

    if(!response.ok) {
        throw new Error(resData.message || "Something went wrong")
    }
    return resData;

}

export default function useHttp(url, config, initialValue) {

    const [data, setData] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const sendRequest = useCallback(async function sendRequest(dataObject) {
        setIsLoading(true)
        try{
            const data = await makeHttpRequest(url, {...config, body: dataObject});
            setData(data)
        } catch(error) {
            setError(error)
        }
        setIsLoading(false)
    }, [url, config])

    useEffect(() => {
        // only if we are fetching the initial meals that we inmediatly would execute the call
       if(config && (config.method === "GET" || !config.method || !config)){
         sendRequest()
       }
    }, [sendRequest, config])

    return {
        data, 
        isLoading,
        error,
        sendRequest
    }
}