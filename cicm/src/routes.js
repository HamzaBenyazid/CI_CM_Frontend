import React from "react";
import { useRoutes } from "react-router-dom";
import TemperatureDashboard from "pages/dashboard/TemperatureDashboard";
import MoistureDashboard from "pages/dashboard/MoistureDashboard";
import HomeDashboard from "pages/dashboard/HomeDashboard";
import WeatherDashboard from "pages/dashboard/WeatherDashboard";
import NPKDashboard from "pages/dashboard/NPKDashboard";
import { jwt_decode } from "utils/jwtUtils";
import { readCookie } from "utils/Cookies";
import ZoneList from "pages/zone/zoneList/ZoneList";
import Login from "pages/account/Login/Login";


var token = readCookie("token"); // read token

const FARM_ADMIN_ROLE = "FARM_ADMIN";
const FARM_WORKER_ROLE = "FARM_WORKER";
const FARM_VISUALISER_ROLE = "FARM_VISUALISER";

const sharedRoutes = [
  { path: "/account/login", element: <Login /> },
  { path: "/zones", element: <ZoneList /> },

]

const dashboardRoutes = [
  { path: "/dashboard", element: <HomeDashboard /> },
  { path: "/dashboard/temperature", element: <TemperatureDashboard /> },
  { path: "/dashboard/moisture", element: <MoistureDashboard /> },
  { path: "/dashboard/weather", element: <WeatherDashboard /> },
  { path: "/dashboard/npk", element: <NPKDashboard /> },
];

const zoneRoutes = [
]


const AnonymousUserRoutes = () =>
  useRoutes([...sharedRoutes, { path: "", element: <div>Home</div> }]);

const FarmAdminRoutes = () => useRoutes([...sharedRoutes, ...zoneRoutes, ...dashboardRoutes]);

const FarmWorkerRoutes = () => useRoutes([...sharedRoutes]);

const FarmVisualizerRoutes = () => useRoutes([...sharedRoutes, ...dashboardRoutes]);

const getRoutes = () => {
  var decodedJwt;
  if (token != null) decodedJwt = jwt_decode(token);
  else return <AnonymousUserRoutes />
  //TODO
  switch (decodedJwt.roles[0]) {
    case FARM_ADMIN_ROLE: return <FarmAdminRoutes />;
    case FARM_WORKER_ROLE: return <FarmWorkerRoutes />;
    case FARM_VISUALISER_ROLE: return <FarmVisualizerRoutes />;
    default: return <AnonymousUserRoutes />
  }
};

export default getRoutes;
