import { createBrowserRouter } from "react-router";

import Home from "../pages/home/Home";
import FAQs from "../pages/FAQs/FAQs";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/register/Register";

import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";

const Admin = lazy(()=> import("../pages/admin/Admin"));

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "FAQs",
                Component: FAQs
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "admin",
                element:(
                    <Suspense fallback={<Loader></Loader>}>
                        <Admin></Admin>
                    </Suspense>
                )
            }
        ]
    }
])