import {Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";

import {Header} from "../components";

const MainLayout = () => {

    const {errors} = useSelector(state => state.auth);
    
    return (
        <div>
            <Header />
            {errors && <h4>{JSON.stringify(errors)}</h4>}
            <Outlet />
        </div>
    )
}

export {
    MainLayout
}