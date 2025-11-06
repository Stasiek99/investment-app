import "../styles.scss";
import Button from "./Button.tsx";

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){
    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="sidebar__list">
                {projects.map((project) => {
                    const isSelected = project.id === selectedProjectId;
                    const buttonClass = isSelected
                        ? "sidebar__button sidebar__button--active"
                        : "sidebar__button sidebar__button--inactive";

                    return (
                        <li key={project.id} className="sidebar__item">
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