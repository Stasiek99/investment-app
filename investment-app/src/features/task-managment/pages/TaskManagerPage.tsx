import "../styles.css";
import { useState } from "react";

import ProjectsSidebar from "../components/ProjectsSidebar.tsx";
import NewProject from "../components/NewProject.tsx";
import NoProjectsSelected from "../components/NoProjectsSelected.tsx";

export default function TaskManagerPage() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject}/>;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectsSelected onStartAddProject={handleStartAddProject}/>;
    }

    return (
        <main className="main">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
            {content}
        </main>
    );
}