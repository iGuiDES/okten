import {useEffect, useState} from "react";
import User from "../User/User";
import {Heading, UserDetails} from "../index";
import './Users.css';

export default function Users(props) {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, []);

    const details = (item) => {
        setUser(item);
    }

    return (
        <div className={'users-information'}>
            {
                user.id && <UserDetails item={user} />
            }
            <Heading title={'Task 1 - Fetch'} />
            {
                users.map((value, index) => <User
                    key={index}
                    item={value}
                    details={details} />)
            }
        </div>
    )
}