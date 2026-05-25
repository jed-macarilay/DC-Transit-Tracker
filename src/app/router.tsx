import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { AlertsPage } from "../pages/alerts/AlertsPage";
import { StationsPage } from "../pages/stations/StationsPage";
import { TripPlannerPage } from "../pages/trip-planner/TripPlannerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "alerts", element: <AlertsPage /> },
      { path: "stations", element: <StationsPage /> },
      { path: "trip-planner", element: <TripPlannerPage /> }
    ]
  }
]);
