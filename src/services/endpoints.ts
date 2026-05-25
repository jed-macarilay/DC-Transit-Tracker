import { wmataClient } from "./wmataClient";
import { TrainArrival } from "../features/arrivals/types";

type StationPredictionResponse = {
  Trains: TrainArrival[];
};

export async function getStationPredictions(stationCode: string) {
  const { data } = await wmataClient.get<StationPredictionResponse>(
    `/StationPrediction.svc/json/GetPrediction/${stationCode}`
  );
  return data.Trains;
}

export async function getRailIncidents() {
  const { data } = await wmataClient.get("/Incidents.svc/json/Incidents");
  return data;
}
