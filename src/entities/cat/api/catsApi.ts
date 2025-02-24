import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICat } from "../model/types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (API_KEY) {
        headers.set("x-api-key", API_KEY);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<
      ICat[],
      { limit?: number; page?: number; size?: string; order?: string }
    >({
      query: ({ limit = 25, page = 0, size = "small", order = "RAN" }) => ({
        url: "images/search",
        params: {
          limit,
          page,
          size,
          order,
          mime_types: "jpg,png",
          format: "json",
          has_breeds: true,
        },
      }),
    }),
  }),
});

export const { useGetCatsQuery } = catApi;
