import "../styles.scss";
export default function NewTask() {
    return (
        <div className="new-task">
            <input type="text" className="new-task__input"/>
            <button className="new-task__button">Add Task</button>
        </div>
    );
}