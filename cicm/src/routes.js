import React from "react";
import { useRoutes } from "react-router-dom";
import TemperatureDashboard from "pages/dashboard/TemperatureDashboard";
import MoistureDashboard from "pages/dashboard/MoistureDashboard";
import HomeDashboard from "pages/dashboard/HomeDashboard";
import WeatherDashboard from "pages/dashboard/WeatherDashboard";
import NPKDashboard from "pages/dashboard/NPKDashboard";

const sharedRoutes = [
  { path: "/dashboard", element: <HomeDashboard /> },
  { path: "/dashboard/temperature", element: <TemperatureDashboard /> },
  { path: "/dashboard/moisture", element: <MoistureDashboard /> },
  { path: "/dashboard/weather", element: <WeatherDashboard /> },
  { path: "/dashboard/npk", element: <NPKDashboard /> },
];

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
