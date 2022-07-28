import {FC, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";

const CarDetailsPage:FC = () => {

    const {id} = useParams<{id: string}>();

    useLocation()

    useEffect(() => {

    }, [id]);

    return (
        <div>
            CarDetailsPage:FC
        </div>
    )
}

export {
    CarDetailsPage
}