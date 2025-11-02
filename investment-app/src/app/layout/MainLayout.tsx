import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-grey-50 text-gray-800">
            <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Investment Tools</h1>
                <nav className="space-x-4">
                    <NavLink to="/"
                             className={({ isActive }) => `hover:underline ${isActive ? "font-bold underline" : ""}`}>
                        Investments
                    </NavLink>
                    <NavLink to="/tasks"
                             className={({ isActive }) => `hover:underline ${isActive ? "font-bold underline" : ""}`}>
                        Tasks
                    </NavLink>
                </nav>
            </header>

            <main className="p-8">
                <Outlet />
            </main>
        </div>
    );
}