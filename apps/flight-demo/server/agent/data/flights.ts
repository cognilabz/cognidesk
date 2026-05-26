import type { Flight } from "../domain/schemas.js";

export const flights: Flight[] = [
  { id: "CL101", origin: "Vienna", destination: "Berlin", departureTime: "2026-05-26T09:10:00+02:00", status: "scheduled", price: 189 },
  { id: "CL102", origin: "Vienna", destination: "Berlin", departureTime: "2026-05-27T10:30:00+02:00", status: "scheduled", price: 205 },
  { id: "CL204", origin: "Vienna", destination: "Paris", departureTime: "2026-05-27T13:40:00+02:00", status: "scheduled", price: 224 },
  { id: "CL330", origin: "Berlin", destination: "Vienna", departureTime: "2026-05-26T18:20:00+02:00", status: "delayed", price: 172 },
];
