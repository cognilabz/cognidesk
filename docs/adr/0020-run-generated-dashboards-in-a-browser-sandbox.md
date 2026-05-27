# Run generated dashboards in a browser sandbox

Generated Studio Dashboard artifacts may be arbitrary browser-run React components, but they will execute inside a Studio Dashboard Sandbox rather than directly in the main Studio React tree. The sandbox gives artifacts a scoped Studio Dashboard Data Layer client while preventing ambient access to Studio application state, credentials, repository permissions, telemetry backend secrets, and the main Studio DOM.
