import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions";

const Round = () => {

const Counter = useSelector(state => state.Counter)
const dispatch = useDispatch()
    return ( 

        <div  className="roundWrapper">
            <button className="roundBtn" onClick={() => { dispatch(decrement()) }}>Prev Round</button>
            <button className="roundBtn" onClick={() => { dispatch(increment()) }}>Next Round</button>
        </div>
     );
}
 
export default Round;