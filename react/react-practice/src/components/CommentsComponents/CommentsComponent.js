import {useEffect, useState} from "react";
import {getAllComments} from "../../service";
import {CommentComponent} from "./CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getAllComments().then(value => setComments(value));
    }, [])

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    )
}

export {
    CommentsComponent
}