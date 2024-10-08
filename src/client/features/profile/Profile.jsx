import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserQuery, useGetUserIncidentsQuery } from "./userSlice";
import { logout } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import IncidentCard from "../reports/subcomponents/IncidentCard";

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
            <nav class="flex justify-between items-center">
              <h2 class="mt-1 align-middle">Profile</h2>
              <button
                className="btn btn-secondary bg-red-700 hover:bg-red-500 border-red-700 mx-2.5 mt-1 py-1 px-3 text-sm"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </nav>
            {userLoading ? (
              <p>Loading user info...</p>
            ) : (
              <span className="card m-2.5 p-2">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Incidents reported:</strong> {incidents.length}
                </p>
                <Link className="link" to="/incidents/submit">
                  Submit Incident Report
                </Link>
              </span>
            )}
            <p class="text-xl font-semibold">Your Incidents:</p>
          </div>
          {incidents.toReversed().map((incident) => (
            <IncidentCard incident={incident} />
          ))}
        </>
      )}
    </>
  );
}
