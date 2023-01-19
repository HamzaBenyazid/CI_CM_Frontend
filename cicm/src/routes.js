import React from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard } from "pages/dashboard/Dashboard";

const sharedRoutes = [{ path: "dashboard", element: <Dashboard /> }]; 

const AnonymousUserRoutes = () =>
  useRoutes([...sharedRoutes, { path: "", element: <div>Home</div> }]);

const FarmAdminRoutes = () => useRoutes([...sharedRoutes]);

const FarmWorkerRoutes = () => useRoutes([...sharedRoutes]);

const FarmVisualizerRoutes = () => useRoutes([...sharedRoutes]);

const getRoutes = () => {
  //TODO
  return <AnonymousUserRoutes />;
};

export default getRoutes;
