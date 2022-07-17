import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getSinglePost} from "../../service";
import {PostComponent} from "./PostComponent";

const PostsCurrentComponent = () => {

    const {postId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        getSinglePost(postId).then(value => setPost([{...value}]));
    }, [postId]);

    return (
        <div>
            {
                post.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    )
}

export {
    PostsCurrentComponent
}