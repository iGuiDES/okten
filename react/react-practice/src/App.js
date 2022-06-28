import './App.css';
import React from 'react';
import {UserPosts, Users} from "./components";
import {useState} from "react";
import {getUsersPosts} from "./services";

function App() {

    const [posts, setPosts] = useState([]);

    const getPosts = (id) => {
        getUsersPosts(id).then(({data}) => setPosts([...data]))
    }

    return (
    <div className="App">
        <div className={'user-posts'}>
            <h3 className={'post-title'}>User post information</h3>
            {
                posts && posts.map((post, index) => <UserPosts key={index} post={post} />)
            }
        </div>
        <div className={'all-users'}>
            <Users getPosts={getPosts} posts={posts}/>
        </div>

    </div>
  );
}

export default App;
