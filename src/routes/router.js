import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, ContactUs, AboutUs, Faq } from "../pages/index"

const ROUTES = [
    {
        path: "/",
        exact: true,
        element: <Home />
    },
    {
        path: "/contact-us",
        exact: true,
        element: <ContactUs />
    },
    {
        path: "/about-us",
        exact: true,
        element: <AboutUs />
    },
    {
        path: "/faq",
        exact: true,
        element: <Faq />
    }
];

const getRoute = (route, parentPath = "") => {
    const { element, subPaths, path, exact } = route;
    const fullPath = parentPath + path;

    if (element) {
        return (
            <Route
                key={fullPath}
                path={fullPath}
                exact={exact}
                element={element}
            />
        );
    } else {
        let subRoutes = (
            <Route key={fullPath} path={fullPath}>
                {subPaths.map((subPath) => getRoute(subPath, fullPath))}
            </Route>
        );

        return subRoutes;
    }
}

const Routing = () => {
    return (
        <Routes>
            {ROUTES.map((route) => getRoute(route))}
        </Routes>
    );
}

export default Routing;