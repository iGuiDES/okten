import {useForm} from "react-hook-form";

import {Submit} from "../../services";
import './AddPost.css';

export default function AddPost({users}) {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            title: 'title',
            body: 'body',
            userId: 1
        }
    });

    return (
        <div className={'wrapper'}>
            <form onSubmit={handleSubmit(Submit)}>
                <h3>Public new post</h3>
                <input
                    {...register('title', {required: true})}
                />
                    {errors.title && <span className={'errors-fields'}>Fields is required</span>}
                <input
                    {...register('body')}
                />
                <select {...register('userId')}>
                    {
                        users?.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
                <button>Click to save</button>
            </form>
        </div>
    )
}