import {useForm} from "react-hook-form";

import {Submit} from "../../services";
import './CreateUser.css';

export default function CreateUser({users}) {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'Your name',
            username: 'Your user name',
            email: 'Your email address',
            address: {
                city: 'Kiev',
                street: 'Ivana Franka'
            },
            phone: '38(XXX)-XXX-XX-XX',
            company: {
                name: "Romaguera-Crona"
            }
        }
    });

    return (
        <div className={'wrapper'}>
            <form onSubmit={handleSubmit(Submit)}>
                <h3>New user</h3>
                <input
                    {...register('name', {required: true})}
                />
                    {errors.title && <span className={'errors-fields'}>Fields is required</span>}
                <input
                    {...register('username', {required: true})}
                />
                <input
                    {...register('email', {required: true})}
                />
                <span className={'title-forms'}>Addresses</span>
                <input
                    {...register('address.city')}
                />
                <input
                    {...register('address.street')}
                />
                <input
                    {...register('phone')}
                />
                <span className={'title-forms'}>Company name</span>
                <input
                    {...register('company.name')}
                />
                <button>Create user</button>
            </form>
        </div>
    )
}