import "../styles.css";
import Button from "./Button.tsx";

export default function ProjectsSidebar({onStartAddProject}){
    return (
        <aside className="sidebar">
            <h2>Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul>
            </ul>
        </aside>
    );
}