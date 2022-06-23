import './User.css';

export default function User({item, details}) {

    return (
        <div className={'user-details-info'}>
            <div className={'person-info'}>
                <span>ID: {item.id}</span>
                <p>Name: {item.name} Username: {item.username}</p>
                <p>Email: {item.email}</p>
            </div>

            <div className={'show-details'}>
                <button className={'button-details'} onClick={() => {
                        details(item);
                    }
                }>User Addressing</button>
            </div>
        </div>
    )
}