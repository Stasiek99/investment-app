import "../styles.css";
import Button from "./Button.tsx";

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="sidebar">
            <h2>Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="project-list">
                {projects.map((project) => {
                    const isSelected = project.id === selectedProjectId;
                    const buttonClass = isSelected
                        ? "project-button project-button--active"
                        : "project-button project-button--inactive";

                    return (
                        <li key={project.id} className="project-item">
                            <button
                                className={buttonClass}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}