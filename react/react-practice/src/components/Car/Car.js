import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update car</button>
        </div>
    )
}

export {
    Car
}