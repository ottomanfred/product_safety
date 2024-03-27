import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetIncidentQuery } from "./incidentSlice";

export default function Incident() {
  const { id } = useParams();
  const { data: incident, isLoading: incidentLoading } =
    useGetIncidentQuery(id);

  const navigate = useNavigate();

  return (
    <>
      {incidentLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link
            to={".."}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            class="link"
          >
            Go Back
          </Link>
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
              <p>{incident.productDescription}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
