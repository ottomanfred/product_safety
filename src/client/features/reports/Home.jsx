import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetRecallsQuery } from "./recallSlice";
import { useGetIncidentsQuery } from "./incidentSlice";
import SearchForm from "./SearchForm";
import Barcode from "../barcode/Barcode";
import "./Home.less";

export default function Home() {
  const { data: recalls, isLoading: recallsLoading } = useGetRecallsQuery();
  const { data: incidents, isLoading: incidentsLoading } =
    useGetIncidentsQuery();
  const [reportsSearch, setReportsSearch] = useState("");

  const searchMatch = new RegExp(reportsSearch, "i");

  return (
    <div className="home_container">
      <ul className="reports">
        {recallsLoading || incidentsLoading ? (
          <li>Loading...</li>
        ) : (
          <>
            <Barcode />
            <SearchForm
              reportsSearch={reportsSearch}
              setReportsSearch={setReportsSearch}
            />
            <h3>Recalls:</h3>
            {recalls
              .filter((recall) => recall.title.match(searchMatch))
              .map((recall) => (
                <li className="recall_card" key={recall.id}>
                  <h2>{recall.title}</h2>
                  <p>{recall.date}</p>
                  <p>{recall.summary}</p>
                  <Link to={`/recalls/${recall.id}`}>Recall Details</Link>
                </li>
              ))}

            <h3>Incidents:</h3>
            {incidents
              .filter((incident) => incident.brand.match(searchMatch))
              .map((incident) => (
                <li className="incident_card" key={incident.id}>
                  <h2>{incident.brand}</h2>
                  <p>{incident.productDescription}</p>
                  <p>{incident.reportDate}</p>
                  <Link to={`/incidents/${incident.id}`}>Incident Details</Link>
                </li>
              ))}
          </>
        )}
      </ul>
    </div>
  );
}
