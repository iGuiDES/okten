import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPage, AlbumsPage, CommentsPage, HomePage, LayoutPage, PostsPage, TodosPage} from "./pages";
import './App.css';

function App() {

  return (
    <div className="App">
        <div>
            <header className={'menu'}>
                <div className={'heading'}>
                    <div>LOGO</div>
                    <ul className={'links'}>
                        <li className={'link'}><Link to={'/'}>Home</Link></li>
                        <li className={'link'}><Link to={'/layout'}>Layout</Link></li>
                        <li className={'link'}><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>
            </header>

            <div className={'content'}>
                <h3>Content</h3>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={'/layout'} element={<LayoutPage />} >
                        <Route path={'todos'} element={<TodosPage />} />
                        <Route path={'albums'} element={<AlbumsPage />} />
                        <Route path={'comments'} element={<CommentsPage /> }>
                            <Route path={':postId'} element={<PostsPage />} />
                        </Route>
                    </Route>
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
