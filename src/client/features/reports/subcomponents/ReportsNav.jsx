import React from "react";

export default function ReportsNav({ setShowRecalls, setPage }) {
  return (
    <div className="flex justify-around gap-4 w-100">
      <a
        onClick={() => {
          setShowRecalls(true);
          setPage(1);
        }}
        className="btn btn-ghost text-xl"
      >
        Recalls
      </a>
      <a
        onClick={() => {
          setShowRecalls(false);
          setPage(1);
        }}
        className="btn btn-ghost text-xl"
      >
        Incidents
      </a>
    </div>
  );
}
