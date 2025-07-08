import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://plan-z-backend.vercel.app/",
    credentials: "include",
  }),
  reducerPath: "adminApi",
  tagTypes: ["Admins", "Events", "Users", "Committees"],
  endpoints: (build) => ({}),
});
 
