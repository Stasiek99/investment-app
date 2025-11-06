import "../styles.scss";
import {useState} from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask("");
    }
    
    return (
        <div className="new-task">
            <input type="text" className="new-task__input" onChange={handleChange} value={enteredTask}/>
            <button className="new-task__button" onClick={handleClick}>Add Task</button>
        </div>
    );
}