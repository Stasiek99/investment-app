import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header>
                <nav className="space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:underline ${isActive ? "font-bold underline" : ""}`
                        }
                    >
                        Investments
                    </NavLink>
                    <NavLink
                        to="/tasks"
                        className={({ isActive }) =>
                            `hover:underline ${isActive ? "font-bold underline" : ""}`
                        }
                    >
                        Tasks
                    </NavLink>
                </nav>
            </header>

            <main className="p-8">
                <Outlet />
            </main>
        </>
    );
}
