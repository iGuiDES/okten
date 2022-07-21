import {useDispatch} from "react-redux";
import {count1Actions, count2Actions} from "../redux";

const Count2Tools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc(2))}>INC</button>
            <button onClick={() => dispatch(count2Actions.dec(3))}>DEC</button>
            <button onClick={() => dispatch(count2Actions.reset(5))}>RESET</button>
        </div>
    )
}

export {
    Count2Tools
}