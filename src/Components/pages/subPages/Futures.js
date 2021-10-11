import useFetch from "../../../useFetch";

const Futures = () => {

    const { data, err, loading} = useFetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all')

    console.log(data)
    return (

        <div>
         
        </div>
      );
}
 
export default Futures;