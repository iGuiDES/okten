import {Link, Outlet} from "react-router-dom";

import '../App.css';

const LayoutPage = () => {
    
    return (
        <div>
            <div>
                <ul className={'links-layout'}>
                    <li className={'link-layout'}><Link to={'todos'}>Todos</Link></li>
                    <li className={'link-layout'}><Link to={'albums'}>Albums</Link></li>
                    <li className={'link-layout'}><Link to={'comments'}>Comments</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
}

export {
    LayoutPage
}