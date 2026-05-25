import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { AlertsPage } from "../pages/alerts/AlertsPage";
import { StationsPage } from "../pages/stations/StationsPage";
import { TripPlannerPage } from "../pages/trip-planner/TripPlannerPage";
import { RailPage } from "../pages/rail/RailPage";
import { BusPage } from "../pages/bus/BusPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "rail", element: <RailPage /> },
      { path: "bus", element: <BusPage /> },
      { path: "alerts", element: <AlertsPage /> },
      { path: "stations", element: <StationsPage /> },
      { path: "trip-planner", element: <TripPlannerPage /> }
    ]
  }
]);
