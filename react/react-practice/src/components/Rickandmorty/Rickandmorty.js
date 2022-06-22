function Rickandmorty(props) {

    const {id, name, status, species, gender, image} = props;

    return (
        <div className={'content'}>
            <div className={'content-info'}>
                <span>ID: {id}</span>
                <h2><b>Name:</b> {name}</h2>
                <p><b>Status:</b> {status}</p>
                <p><b>Species:</b> {species}</p>
                <p><b>Gender:</b> {gender}</p>
            </div>
            <div className={'content-img'}>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}

export default Rickandmorty;
