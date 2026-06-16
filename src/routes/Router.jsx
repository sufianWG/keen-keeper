import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../../src/pages/Home";
import Timeline from "../../src/pages/Timeline";
import Stats from "../../src/pages/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }

        ]
    },
]);