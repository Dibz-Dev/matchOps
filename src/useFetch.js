


const useFetch = (url) => {

   
   

    return { data, err, loading }

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch(url, {
    //             "method": "GET",
    //                 "headers": {
    //                     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //                     "x-rapidapi-key": "1eb628ee98msh88d74b32f5a3c11p198c0bjsn7a831a3c9184"
    //                 }
    //         })
    //         .then(res => {
    //             if(!res.ok) {
    //                 throw Error ('could not fetch data from this resource')
    //             }
    //             return res.json()
    //         }).then(data => {
    //             setData(data)
    //             setErr(null)
    //             setLoading(false)
    //         }).catch(err => {
    //             setErr(err.message)
    //         })
    //     }, 2000)
    // }, [url])

    // return { data, err, loading }
    
    
  

}


export default useFetch ;