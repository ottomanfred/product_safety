import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserQuery, useGetUserIncidentsQuery } from "./userSlice";
import { logout } from "../auth/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const { data: incidents, isLoading: incidentsLoading } =
    useGetUserIncidentsQuery();
  const { data: user, isLoading: userLoading } = useGetUserQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {incidentsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Profile</h2>
          {userLoading ? (
            <p>Loading user info...</p>
          ) : (
            <>
              <p>Username: {user.username}</p>
              <p>Incidents reported: {incidents.length}</p>
            </>
          )}
          <button onClick={handleLogout}>Log Out</button>
          <Link className="link" to="/incidents/submit">
            Submit Incident Report
          </Link>
          <h3>Your Incidents:</h3>
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
                  <Link to={`/incidents/${incident.id}`} class="link">
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
