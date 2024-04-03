import api from "../../store/api";

const incidentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getIncidents: builder.query({
      query: (page) => `/incidents/${page}`,
      providesTags: ["Incidents"],
    }),
    getIncident: builder.query({
      query: (id) => `/incidents/${id}`,
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
