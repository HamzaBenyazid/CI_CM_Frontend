import * as React from 'react';

import { Dashboard } from './Dashboard';

const NPKDashboard = () => (
    <Dashboard
        dashboard="NPK"
        url="https://ci-cm.kb.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/df73ec30-9808-11ed-af97-6f8fde4c1c9c?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))"
    />
);

export default NPKDashboard;