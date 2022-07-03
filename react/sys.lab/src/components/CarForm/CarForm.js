import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";
import css from './CarForm.module.css';

const CarForm = ({addCar, carForUpdate, updateCar}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: "onBlur"});

    const submit = async (newCar) => {

        if (!carForUpdate) {
            const {data} = await carService.create(newCar);
            addCar(data);
        } else {
            const {data} = await carService.updateById(carForUpdate.id, newCar);
            updateCar(data);
        }
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    return (
        <div className={css.CarForm}>
            <form className={css.Form} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Typing model'} {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'Typing price'} {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="number" placeholder={'Typing year'} {...register('year', {
                    valueAsNumber: true,
                    required: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>{carForUpdate ? 'Edit' : 'Save'}</button>
            </form>
            <div className={css.Error}>
                {errors.model && <span>Naming model typing is incorrect. Only Alpha min 1 max 20 character</span>}
                {errors.price && <span>Naming price typing is incorrect. Only Alpha min 0 max 1 000 000</span>}
                {errors.year && <span>Naming year typing is incorrect. Only Alpha min 1990 max current year</span>}
            </div>
        </div>
    )
}

export {
    CarForm
}