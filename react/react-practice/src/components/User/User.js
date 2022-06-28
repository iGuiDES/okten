import './User.css';

export default function User({item, getPosts}) {
    return (
        <div className={'wrapper'}>
            <div className={'user-information'}>
                <span><b>User ID:</b> {item.id}</span>
                <h3>Name: {item.name}</h3>
                <p><b>Email:</b> {item.email}</p>
            </div>
            <div>
                <button className={'button-get-posts'} onClick={() => getPosts(item.id)}>
                    Get users post
                </button>
            </div>
        </div>
    )
}