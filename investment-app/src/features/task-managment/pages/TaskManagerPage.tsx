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
                selectedProjectId: null
            };
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectsSelected />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
            {content}
        </main>
    );
}