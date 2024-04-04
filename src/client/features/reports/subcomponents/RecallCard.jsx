import React from "react";
import { Link } from "react-router-dom";

export default function RecallCard({ recall }) {
  function infoIcon() {
    return (
      <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
      </svg>
    );
  }

  const RECALL =
    "Recall means a firm's removal or correction of a marketed product that the FDA considers to be in violation of the laws it administers and against which the agency would initiate legal action, e.g., seizure. Recall does not include a market withdrawal or a stock recovery.";

  return (
    <div className="card w-90vw bg-base-100 shadow-lg m-2.5" key={recall.id}>
      <div className="card-body">
        <h2 className="card-title">{recall.title}</h2>
        <div className="flex">
          <div class="border-2 border-rose-600 text-red-600 rounded-md w-20 text-center">
            Recall
          </div>
          <div className="tooltip" data-tip={RECALL}>
            <button class="m-1">{infoIcon()}</button>
          </div>
        </div>

        <p>{recall.summary.split(" ", 8).join(" ")}...</p>
        <div className="card-actions justify-end">
          <Link to={`/recall/${recall.id}`} class="link">
            Recall Details
          </Link>
        </div>
      </div>
    </div>
  );
}
