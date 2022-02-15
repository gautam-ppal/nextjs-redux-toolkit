import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/slices/counterSlice";

const IncDec =   ()=> {

    const dispatch = useDispatch();
    const counterVal  = useSelector((state)=>state.counter.value) 
    return (
        <>
            <div className="" >
                <h1>Increament decreament Next-Redux</h1>
                <div className="" >
                    <button onClick={()=>dispatch(decrement())} type="button" >-</button>
                        <input type="text"  value={counterVal}/>
                    <button onClick={()=>dispatch(increment())} type="button" >+</button>
                </div>
            </div>
        </>
    )
}

export default IncDec;