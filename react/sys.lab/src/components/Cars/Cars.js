import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [])

    const addCar = (car) => {
        setCars([...cars, car]);
    }

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        const result = [...cars]
        const index = result.findIndex(value => value.id === id);

        if (index !== -1) {
            result.splice(index, 1);
            setCars(result);
        }

    }

    const updateCar = (car) => {
        const result = [...cars];
        const find = result.find(value => value.id === carForUpdate.id);

        Object.assign(find, car);
        setCars(result);
        setCarForUpdate(null);
    }

    return (
        <div>
            <CarForm addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <hr/>
            {
                cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate} />)
            }
        </div>
    )
}

export {
    Cars
}