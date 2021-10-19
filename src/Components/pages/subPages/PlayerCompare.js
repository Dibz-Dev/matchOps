import { useState } from "react";
import PlayerPanel from "../../SubComponents/PlayerPanel";
import CompareTemplate from "../../SubComponents/CompareTemplate";
import useFetch from "../../../useFetch";
import LoadingPage from '../../LoadingPage';

const PlayerCompare = () => {

    const [player, setPlayer] = useState('')
    const [ show, setShowPlayer ] = useState(false)
    const [ result, setResult ] = useState('ronaldo')    
    const { data, err, loading } = useFetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${result}`)

                    // {loading ? console.log('loading') : console.log(data)}

                 
    {if (loading) { return (


      <div>
            <form className="playerPanelGroup">
               
              <input onChange={((e) => {
                
                setPlayer(e.target.value)
                 console.log(player)
                  
              }) }
               type="text" name="PlayerBox" placeholder="Search for a player"/>
                 <button onClick={((e) => {
                   e.preventDefault()
                   setResult(player)
                   setShowPlayer(true)
               
                 })} type="submit"> View </button>
               </form>

        <div>

        </div>

        <LoadingPage />
          {/* <PlayerPanel /> */}
          <CompareTemplate result={result} data={data} loading={loading} player={player} show={show} />
      </div>
    );} else {
      
      return (


        <div>
              <form className="playerPanelGroup">
                 
                <input onChange={((e) => {
                  
                  setPlayer(e.target.value)
                   console.log(player)
                    
                }) }
                 type="text" name="PlayerBox" placeholder="Search for a player"/>
                   <button onClick={((e) => {
                     e.preventDefault()
                     setResult(player)
                     setShowPlayer(true)
                   })} type="submit"> View </button>
                 </form>

          <div>

          </div>
            <PlayerPanel />
            <CompareTemplate result={result} data={data} loading={loading} player={player} show={show}/>
        </div>
      );}}
}
 
export default PlayerCompare;