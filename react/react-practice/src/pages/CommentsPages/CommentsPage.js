import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../../components";
import css from './CommentsPage.module.css';

const CommentsPage = () => {
    
    return (
        <div className={css.wrapper}>
            <div className={css.comments}>
                <CommentsComponent />
            </div>
            <div className={css.postInfo}>
                <Outlet />
            </div>

        </div>
    )
}

export {
    CommentsPage
}