import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import {User} from "../index";
import './Users.css';

export default function Users({item, getPosts, posts}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data);
        })
    });

    return (
        <div>
            {
                users.map(user => <User key={user.id} item={user} getPosts={getPosts} posts={posts}/>)
            }
        </div>
    )
}