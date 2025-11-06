import "../styles.scss";
import Tasks from "./Tasks.tsx";

export default function SelectedProject({project, onDelete}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
      <div className="selected-project">
          <header className="selected-project__header">
              <div className="selected-project__header-row">
                  <h1 className="selected-project__title">{project.title}</h1>
                  <button className="selected-project__delete-button" onClick={onDelete}>Delete</button>
              </div>
              <p className="selected-project__date">{formattedDate}</p>
              <p className="selected-project__description">{project.description}</p>
          </header>
          <Tasks />
      </div>
    );
}