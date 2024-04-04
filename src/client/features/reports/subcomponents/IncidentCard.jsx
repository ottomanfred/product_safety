import React from "react";
import { Link } from "react-router-dom";

export default function IncidentCard({ incident }) {
  const INCIDENT =
    "A Customer Incident Report is a detailed document used to record and address any incidents involving customers in a business setting. These incidents may include accidents, injuries, disputes, complaints, or any other unexpected events that impact the customer experience.";

  function infoIcon() {
    return (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
      </svg>
    );
  }

  return (
    <div className="card w-90vw bg-base-100 shadow-lg m-2.5" key={incident.id}>
      <div className="card-body">
        <h2 className="card-title">{incident.brand}</h2>

        <div className="flex">
          <div class="border-2 border-yellow-400 text-yellow-400 rounded-md w-20 text-center">
            Incident
          </div>
          <div className="tooltip" data-tip={INCIDENT}>
            <button class="m-1">{infoIcon()}</button>
          </div>
        </div>

        <p>{incident.productDescription.slice(0, 45)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/incident/${incident.id}`} class="link">
            Incident Details
          </Link>
        </div>
      </div>
    </div>
  );
}
