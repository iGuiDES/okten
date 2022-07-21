import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {

    const {reset, register, handleSubmit, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate])

    const submit = async (date) => {
        await dispatch(carActions.updateByID({id: carForUpdate.id, car: date}));
        reset();
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>update</button>
        </form>
    )
}

export {
    CarForm
}