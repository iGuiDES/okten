import css from "./Post.module.css";

const PostComponent = ({item}) => {

    const {id, title, body} = item;

    return (
        <div className={css.wrapper}>
            <div>
                <p>
                    <b>ID: {id}</b>
                </p>
                <ul>
                    <li>
                        <h4>Title: {title}</h4>
                    </li>
                    <li>
                        <i>{body}</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {
    PostComponent
}