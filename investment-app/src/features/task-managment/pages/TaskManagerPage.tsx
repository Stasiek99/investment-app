import ProjectsSidebar from "../components/ProjectsSidebar.tsx";

export default function TaskManagerPage() {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Task Management</h2>
            <p className="text-grey-600">
                <main className="h-screen my-8">
                    <ProjectsSidebar />
                </main>
            </p>
        </div>
    );
}