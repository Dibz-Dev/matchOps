const PlayerPanel = () => {


    return (

        <div className="playerPanelWrapper">

                 <form className="playerPanelGroup">
                   <input type="text" placeholder="Team"/>
                   <input type="text" placeholder="Position"/>
                   <button type="submit"> Search</button>
                 </form>
                 <div className="searchResults">
                   <ul className="searchPlayerBox">
                     {/*  INJECT LIST ITEMS / PLAYERS HERE DYNAMICALLY */}
                   </ul>
                 </div>
        </div>
      );
}
 
export default PlayerPanel;