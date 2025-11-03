import ProjectsSidebar from "../components/ProjectsSidebar.tsx";
import NewProject from "../components/NewProject.tsx";

export default function TaskManagerPage() {
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar />
            <NewProject />
        </main>
    );
}