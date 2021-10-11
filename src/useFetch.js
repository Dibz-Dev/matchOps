import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [ fixtures, setFixtures ] = useState([])
    const [ data, setData ] = useState([])
    const [ err, setErr ] = useState(null)
    const [ loading, setLoading ] = useState(true)
   
 useEffect(() => {


 setTimeout(() => {
        const connect = async () => {
         try { 

         
            const response =  await fetch(url, {
                            "method": "GET",
                                "headers": {
                                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                                    "x-rapidapi-key": "3f22d1c517msh007b9f16b469511p1fffb2jsn7791a5c8df36"
                                }
                        })

                const result = await response.json();

              setData(result)
                
            }
            catch(err) {
              setErr() 

            } finally {
                setLoading(false)
            }
        }
        connect()
    })
        
       
    }, [url])

    return { data, err, loading } 
    
}


export default useFetch ;