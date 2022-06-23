import React from 'react';
import './App.css';
import {useEffect, useState} from "react";
import {SpaceX} from "./components";
import Heading from "./components/Heading/Heading";


function App() {

    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setSpaces(value)
            });
    }, []);

  return (
    <div className="App">
            <Heading title={'Task 2 - Space X'}/>
            {
                spaces.filter(items => items.launch_year !== '2020').map((value, index) => <SpaceX key={index} items={value} />)
            }
    </div>
  );
}

export default App;
