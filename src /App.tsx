import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1 = 'What to learn111'
    const title2 = 'What to learn111vfv'

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title={title1} body={100} tasks={tasks2}/>
            <Todolist title={title2} tasks={tasks1}/>
        </div>
    )
    }

export default App;
