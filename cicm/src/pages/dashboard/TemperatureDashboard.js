import * as React from "react";
import { Dashboard } from "./Dashboard";

const TemperatureDashboard = () => (
  <Dashboard
    dashboard="Temperature"
    url="https://ci-cm.kb.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/2f529680-97e5-11ed-af97-6f8fde4c1c9c?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2023-01-19T10%3A35%3A14.845Z'%2Cto%3A'2023-01-19T10%3A39%3A49.660Z'))"
  />
);

export default TemperatureDashboard;
