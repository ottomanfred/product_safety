import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetRecallsQuery } from "./recallSlice";
import { useGetIncidentsQuery } from "./incidentSlice";
import SearchForm from "./SearchForm";
import IncidentCard from "./subcomponents/IncidentCard";
import RecallCard from "./subcomponents/RecallCard";

export default function Home() {
  const { data: recalls, isLoading: recallsLoading } = useGetRecallsQuery();
  const { data: incidents, isLoading: incidentsLoading } =
    useGetIncidentsQuery();

  const [reportsSearch, setReportsSearch] = useState("");
  const [result] = useOutletContext();

  const searchMatch = new RegExp(reportsSearch, "i");

  useEffect(() => {
    setReportsSearch(result);
  }, [result]);

  return (
    <div className="home_container">
      <ul className="reports">
        {recallsLoading || incidentsLoading ? (
          <li>Loading...</li>
        ) : (
          <>
            <SearchForm
              reportsSearch={reportsSearch}
              setReportsSearch={setReportsSearch}
            />
            <h3 class="text-3xl font-bold dark:text-white m-2.5">Recalls:</h3>
            {recalls
              .filter((recall) => recall.title.match(searchMatch))
              .map((recall) => (
                <RecallCard recall={recall} />
              ))}

            <h3 class="text-3xl font-bold dark:text-white m-2.5">Incidents:</h3>
            {incidents
              .filter(
                (incident) =>
                  incident.brand.match(searchMatch) ||
                  incident.upc?.match(searchMatch)
              )
              .map((incident) => (
                <IncidentCard incident={incident} />
              ))}
          </>
        )}
      </ul>
    </div>
  );
}
