import './App.css';
import React, {useEffect, useState} from 'react';

import {getUsersFetch} from "./services";
import {AddPost} from "./components";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersFetch().then(value => {
            setUsers(value);
        });
    }, []);

  return (
    <div className="App">
        <AddPost users={users} />
    </div>
  );
}

export default App;
