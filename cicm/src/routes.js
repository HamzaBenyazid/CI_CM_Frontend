import React from "react";
import { useRoutes } from "react-router-dom";

const sharedRoutes = [];

const AnonymousUserRoutes = () =>
  useRoutes([...sharedRoutes, { path: "", element: <div>Home</div> }]);

const FarmAdminRoutes = () => useRoutes([...sharedRoutes]);

const FarmWorkerRoutes = () => useRoutes([...sharedRoutes]);

const FarmVisualizerRoutes = () => useRoutes([...sharedRoutes]);

const getRoutes = () => {
    //TODO
    return  "";
};

export default getRoutes;
