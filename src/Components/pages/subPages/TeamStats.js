import useFetch from '../../../useFetch'

const TeamStats = () => {

const { data, err, loading } = useFetch('https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2021')

      {loading ? console.log('loading') : console.log(data.response)}

    return (

        <div>
      

        </div>
      );
}
 
export default TeamStats;


