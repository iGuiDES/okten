const AlbumComponent = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <h4>{id} - {title}</h4>
        </div>
    )
}

export {
    AlbumComponent
}