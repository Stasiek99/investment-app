import "../styles.css";
import { useState } from "react";

import ProjectsSidebar from "../components/ProjectsSidebar.tsx";
import NewProject from "../components/NewProject.tsx";
import NoProjectsSelected from "../components/NoProjectsSelected.tsx";
import SelectedProject from "../components/SelectedProject.tsx";

export default function TaskManagerPage() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        })
    }

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
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

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

    let content = <SelectedProject project={selectedProject} />;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectsSelected onStartAddProject={handleStartAddProject}/>;
    }

    return (
        <main className="main">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
            {content}
        </main>
    );
}