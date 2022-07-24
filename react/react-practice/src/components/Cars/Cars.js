import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const {cars, prev, next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}));
    }, [query]);

    const prevPage = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`});
    };

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`});
    };

    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
            <CarForm />
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    )
}

export {
    Cars
}