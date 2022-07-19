import {useDispatch, useSelector} from "react-redux";

const HomeComponent = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h1>{state}</h1>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'INC', payload: 1})} >INC</button>
                <button onClick={() => dispatch({type: 'RESET', payload: 0})} >RESET</button>
                <button onClick={() => dispatch({type: 'DEC', payload: 1})} >DEC</button>
            </div>
        </div>
    )
}

export {
    HomeComponent
}