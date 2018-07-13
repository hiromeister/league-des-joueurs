import React, { Component } from 'react';
import TeamList from "../TeamList";
import AddTeam from '../AddTeam'
const App = () => {

    return (
        <div className="App">
            <AddTeam />
            <TeamList />
        </div>
    );

}

export default App;
