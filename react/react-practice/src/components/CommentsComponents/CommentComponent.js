import {Link} from "react-router-dom";

import css from './Comment.module.css';

const CommentComponent = ({comment}) => {

    const {id, postId, name, email, body} = comment;

    return (
        <div>
            <div className={css.wrapper}>
                <div className={css.comment}>
                    <span>ID: {id}</span>
                    <h4>User Name: {name}</h4>
                    <p><i>Email: {email}</i></p>
                    <p className={css.info}>{body}</p>
                </div>
                <div className={css.view}>
                    <Link to={postId.toString()}>View the publisher</Link>
                </div>
            </div>
        </div>
    )
}

export {
    CommentComponent
}