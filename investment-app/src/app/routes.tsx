import { createBrowserRouter } from "react-router-dom";

import { InvestmentsCalculatorPage } from "../features/investments-calculator";
import { TaskManagementPage } from "../features/task-managment";
import MainLayout from "./layout/MainLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <InvestmentsCalculatorPage /> },
            { path: "/tasks", element: <TaskManagementPage /> },
        ],
    },
]);