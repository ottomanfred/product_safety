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
          <div className="user-profile-upper">
            <nav class="flex justify-between">
              <h2>Profile</h2>
              <button
                className="btn btn-secondary bg-red-700 hover:bg-red-500 border-red-700 mx-2.5 mt-1"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </nav>
            {userLoading ? (
              <p>Loading user info...</p>
            ) : (
              <span className="user-details">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Incidents reported:</strong> {incidents.length}</p>
                <Link className="link" to="/incidents/submit">
              Submit Incident Report
            </Link>
              </span>
            )}
            <h3>Your Incidents:</h3>
          </div>
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
