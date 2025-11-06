import "../styles.scss";
import NewTask from "./NewTask.tsx";

export default function Tasks() {
    return (
        <section className="tasks">
            <h2 className="tasks__title">Tasks</h2>
            <NewTask />
            <p className="tasks__empty">This project does not have any tasks yet.</p>
            <ul></ul>
        </section>
    )
}