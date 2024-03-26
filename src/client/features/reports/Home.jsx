import { useState, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useGetRecallsQuery } from "./recallSlice";
import { useGetIncidentsQuery } from "./incidentSlice";
import SearchForm from "./SearchForm";

export default function Home() {
  const { data: recalls, isLoading: recallsLoading } = useGetRecallsQuery();
  const { data: incidents, isLoading: incidentsLoading } =
    useGetIncidentsQuery();

  const [reportsSearch, setReportsSearch] = useState("");
  const [result] = useOutletContext();

  const navigate = useNavigate();

  const searchMatch = new RegExp(reportsSearch, "i");

  function infoIcon() {
    return (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
      </svg>
    );
  }

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
                <div
                  className="card w-90vw bg-base-100 shadow-lg m-2.5"
                  key={recall.id}
                >
                  <div className="card-body">
                    <h2 className="card-title">{recall.title}</h2>
                    <div className="flex">
                      <div class="border-2 border-rose-600 text-red-600 rounded-md w-20 text-center">
                        Recall
                      </div>
                      <div className="tooltip" data-tip="hello">
                        <button class="m-1">{infoIcon()}</button>
                      </div>
                    </div>

                    <p>{recall.summary.split(" ", 8).join(" ")}...</p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/recalls/${recall.id}`}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Recall Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            <h3 class="text-3xl font-bold dark:text-white m-2.5">Incidents:</h3>
            {incidents
              .filter((incident) => incident.brand.match(searchMatch))
              .map((incident) => (
                <div
                  className="card w-90vw bg-base-100 shadow-lg m-2.5"
                  key={incident.id}
                >
                  <div className="card-body">
                    <h2 className="card-title">{incident.brand}</h2>

                    <div className="flex">
                      <div class="border-2 border-yellow-400 text-yellow-400 rounded-md w-20 text-center">
                        Incident
                      </div>
                    </div>

                    <p>{incident.productDescription.slice(0, 45)}...</p>
                    <div className="card-actions justify-end">
                    <Link
                        to={`/incidents/${incident.id}`}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Incident Details
                      </Link>

                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </ul>
    </div>
  );
}
