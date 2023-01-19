import * as React from "react";

import { Dashboard } from "./Dashboard";

const MoistureDashboard = () => (
  <Dashboard
    dashboard="Moisture"
    url="https://ci-cm.kb.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/6df2cdf0-9809-11ed-af97-6f8fde4c1c9c?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))"
  />
);

export default MoistureDashboard;