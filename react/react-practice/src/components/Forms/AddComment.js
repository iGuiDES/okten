import {useForm} from "react-hook-form";

import {Submit} from "../../services";
import './AddComment.css';

export default function AddComment({users}) {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'Type your title theme comment',
            email: 'tmp@example.com',
            body: 'Enter the content of the comment'
        }
    });

    return (
        <div className={'wrapper'}>
            <form onSubmit={handleSubmit(Submit)}>
                <h3>Public new comment</h3>
                <input
                    {...register('name', {required: true})}
                />
                    {errors.name && <span className={'errors-fields'}>Fields is required</span>}
                <input
                    {...register('email', {required: true})}
                />
                    {errors.email && <span className={'errors-fields'}>Fields is required</span>}
                <input
                    {...register('body')}
                />
                <span className={'title'}>Your Name</span>
                <select {...register('userId')}>
                    {
                        users?.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
                <button>Click to public</button>
            </form>
        </div>
    )
}