import api from "../../store/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["User"],
    }),
    getUserIncidents: builder.query({
      query: () => "/user/incidents",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useGetUserIncidentsQuery } = userApi;
