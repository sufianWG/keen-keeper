import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../../src/pages/Home";
import Timeline from "../../src/pages/Timeline";
import Stats from "../../src/pages/Stats";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import FriendsDetailsPage from "../pages/FriendDetailsPage/FriendDetailsPage";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Suspense fallback={<Loading></Loading>}><Home></Home></Suspense> 
            },
            {
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            },
            {
                path: "/details/:id",
                element: <FriendsDetailsPage></FriendsDetailsPage>,
                loader: ()=> fetch("/friends.json")
            }

        ],
        errorElement : <NotFoundPage></NotFoundPage>
    },
]);