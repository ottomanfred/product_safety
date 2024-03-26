import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserQuery, useGetUserIncidentsQuery } from "./userSlice";

export default function Profile() {
  const { data: incidents, isLoading: incidentsLoading } =
    useGetUserIncidentsQuery();
  const navigate = useNavigate();

  return (
    <>
      {incidentsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>Profile</div>
          <Link to="/incidents/submit">Submit Incident Report</Link>
          <h3>Your Reports:</h3>
          {incidents.map((incident) => (
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
    </>
  );
}
