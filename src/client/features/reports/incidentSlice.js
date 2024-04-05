import api from "../../store/api";

const incidentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getIncidents: builder.query({
      query: ({page, reportsSearch}) => ({
        url: `/incidents/${page}`,
        params: {
          search: reportsSearch,
        },
      }),
      providesTags: ["Incidents"],
    }),
    getIncident: builder.query({
      query: (id) => `/incident/${id}`,
      providesTags: ["Incidents"],
    }),
    addIncident: builder.mutation({
      query: (incident) => ({
        url: "/incidents",
        method: "POST",
        body: incident,
      }),
      invalidatesTags: ["Incidents", "User"],
    }),
  }),
});

export const {
  useGetIncidentsQuery,
  useGetIncidentQuery,
  useAddIncidentMutation,
} = incidentsApi;
