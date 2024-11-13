import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://13.49.243.58/api" });

const baseQueryExtended: BaseQueryFn = (args, api, extraOptions) =>
  baseQuery(args, api, extraOptions);

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["skillz"],
  endpoints: () => ({}),
});
