import './components/Rickandmorty/Rickandmorty.css';
import './components/Heading/Heading.css';
import React from "react";
import Rickandmorty from "./components/Rickandmorty/Rickandmorty";
import Heading from "./components/Heading/Heading";

function App() {

  return (
    <div className="App">
        <Heading />
        <Rickandmorty
            id={1}
            name={'Rick Sanchez'}
            status={'Alive'}
            species={'Human'}
            type={null}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        />
        <Rickandmorty
            id={2}
            name={'Morty Smith'}
            status={'Alive'}
            species={'Human'}
            type={null}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
        />
        <Rickandmorty
            id={3}
            name={'Summer Smith'}
            status={'Alive'}
            species={'Human'}
            type={null}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
        />
        <Rickandmorty
            id={4}
            name={'Beth Smith'}
            status={'Alive'}
            species={'Human'}
            type={null}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        />
        <Rickandmorty
            id={5}
            name={'Jerry Smith'}
            status={'Alive'}
            species={'Human'}
            type={null}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
        />
        <Rickandmorty
            id={6}
            name={'Abadango Cluster Princess'}
            status={'Alive'}
            species={'Alien'}
            type={null}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
        />

    </div>
  );
}

export default App;
