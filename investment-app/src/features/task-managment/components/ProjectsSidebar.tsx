import "../styles.css";
import Button from "./Button.tsx";

export default function ProjectsSidebar({onStartAddProject, projects}){
    return (
        <aside className="sidebar">
            <h2>Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.id} className="project-list-item">
                    <button>{project.title}</button>
                </li>
                ))}
            </ul>
        </aside>
    );
}