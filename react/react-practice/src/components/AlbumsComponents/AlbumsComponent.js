import {useEffect, useState} from "react";
import {getAllAlbums} from "../../service";
import {AlbumComponent} from "./AlbumComponent";

const AlbumsComponent = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAllAlbums().then(value => setAlbums(value));
    }, [])

    return (
        <div>
            {
                albums.map(album => <AlbumComponent key={album.id} album={album} />)
            }
        </div>
    )
}

export {
    AlbumsComponent
}