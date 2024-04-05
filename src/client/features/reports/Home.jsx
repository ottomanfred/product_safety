import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useGetRecallsQuery } from "./recallSlice";
import { useGetIncidentsQuery } from "./incidentSlice";
import SearchForm from "./SearchForm";
import RecallCard from "./subcomponents/RecallCard";
import IncidentCard from "./subcomponents/IncidentCard";
import Pagination from "./subcomponents/Pagination";
import ReportsNav from "./subcomponents/ReportsNav";

/** This component is the home page of the application. */
export default function Home() {
  //variable to control pagination params
  const [page, setPage] = useState(1);
  const [reportsSearch, setReportsSearch] = useState("ikea");
  const [result] = useOutletContext();
  const [showRecalls, setShowRecalls] = useState(true);

  const { data: recalls, isLoading: recallsLoading } = useGetRecallsQuery({page, reportsSearch});
  const { data: incidents, isLoading: incidentsLoading } = useGetIncidentsQuery({page, reportsSearch});

  //Controls the search input field, and makes 'result' from the barcode scanner available to Home to filter recalls and incidents


  // makes search input field case insensitive for filtering
  const searchMatch = new RegExp(reportsSearch, "i");

  //filters recalls/incidents whenever 'result' changes, which happens when a barcode is scanned
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
            <ReportsNav setShowRecalls={setShowRecalls} setPage={setPage} />
            <SearchForm
              reportsSearch={reportsSearch}
              setReportsSearch={setReportsSearch}
            />
            <Pagination page={page} setPage={setPage} />
            {showRecalls ? (
              <>
                <h3 class="text-3xl font-bold dark:text-white m-2.5">
                  Recalls:
                </h3>
                {recalls.map((recall) => (
                  <RecallCard recall={recall} />
                ))}
              </>
            ) : (
              <>
                <h3 class="text-3xl font-bold dark:text-white m-2.5">
                  Incidents:
                </h3>
                {incidents.map((incident) => (
                  <IncidentCard incident={incident} />
                ))}
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
}
