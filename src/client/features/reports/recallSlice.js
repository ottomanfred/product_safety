import api from "../../store/api";

const recallsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecalls: builder.query({
      query: (page) => `/recalls/${page}`,
      providesTags: ["Recalls"],
    }),
    getRecall: builder.query({
      query: (id) => `/recall/${id}`,
      providesTags: ["Recalls"],
    }),
  }),
});

export const { useGetRecallsQuery, useGetRecallQuery } = recallsApi;
