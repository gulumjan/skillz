import { api as index } from "..";

export const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<
      SKILLZ.GetArticlesResponse,
      SKILLZ.GetArticlesRequest
    >({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
    getArticlesDetails: builder.query<
      SKILLZ.GetArticlesDetailsResponse,
      SKILLZ.GetArticlesDetailsRequest
    >({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
    getCourses: builder.query<
      SKILLZ.GetCoursesResponse,
      SKILLZ.GetCoursesRequest
    >({
      query: () => ({
        url: "/courses/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
    getWorkShopsDetails: builder.query<
      SKILLZ.GetWorkShopsDetailsResponse,
      SKILLZ.GetWorkShopsDetailsRequest
    >({
      query: (id) => ({
        url: `/freeworkshops/${id}`,
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
    getCoursesDetails: builder.query<
      SKILLZ.GetCoursesDetailsResponse,
      SKILLZ.GetCoursesDetailsRequest
    >({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
    getWorkshops: builder.query<
      SKILLZ.GetWorkShopsResponse,
      SKILLZ.GetWorkShopsRequest
    >({
      query: () => ({
        url: "/freeworkshops/",
        method: "GET",
      }),
      providesTags: ["skillz"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetCoursesQuery,
  useGetWorkshopsQuery,
  useGetArticlesDetailsQuery,
  useGetWorkShopsDetailsQuery,
  useGetCoursesDetailsQuery,
} = api;
