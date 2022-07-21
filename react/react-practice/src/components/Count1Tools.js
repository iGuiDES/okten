import {useDispatch} from "react-redux";

import {count1Actions} from "../redux";

const Count1Tools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count1Actions.inc())}>inc</button>
            <button onClick={() => dispatch(count1Actions.dec())}>dec</button>
            <button onClick={() => dispatch(count1Actions.reset())}>reset</button>
            <button onClick={() => dispatch(count1Actions.getUsers())}>get users</button>
        </div>
    )
}

export {
    Count1Tools
}