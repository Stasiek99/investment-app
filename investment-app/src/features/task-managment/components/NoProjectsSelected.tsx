import "../styles.css";
import noProjectImage from "../../../assets/no-projects.png";
import Button from "./Button.tsx";

export default function NoProjectsSelected({onStartAddProject}) {
    return <div className="no-projects">
        <img src={noProjectImage} alt="An empty task list" />
        <h2>No Projects Selected</h2>
        <p>Select a project or get started with a new one</p>
        <p>
            <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
    </div>
}