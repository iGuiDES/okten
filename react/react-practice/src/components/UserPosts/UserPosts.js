import './UserPosts.css';
import React from "react";

export default function UserPosts({post}) {

    return (
        <div className={'post-details'}>
            <span>
                <b>
                    <i>User ID: {post.userId} && Post ID: {post.id}</i>
                </b>
            </span>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}