import css from './Car.module.css';

const Car = ({car, deleteCar, setCarForUpdate}) => {

    const {id, model, price, year} = car;

    return (
        <div className={css.Cars}>
            <div className={css.info}>
                <p>ID: {id}</p>
                <p>Model: {model}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>
            </div>
            <div className={css.tools}>
                <button className={css.blue} onClick={() => setCarForUpdate(car)}>Edit</button>
                <button className={css.red} onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    )
}

export {
    Car
}