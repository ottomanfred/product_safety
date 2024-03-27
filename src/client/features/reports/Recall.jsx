import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetRecallQuery } from "./recallSlice";

export default function Recall() {
  const { id } = useParams();
  const { data: recall, isLoading: recallLoading } = useGetRecallQuery(id);

  const navigate = useNavigate();

  return (
    <main class="mb-20">
      {recallLoading ? (
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

          <div key={recall.id} className="card-body-details">
            <div className="relative flex flex-row justify-center items-center">
              <div class="absolute top-4 sm:top-0 right-0 sm:mt-4 border-2 border-rose-600 text-xs sm:text-base text-red-600 rounded-md w-12 sm:w-20 text-center">
                Recall
              </div>
              <h2 className="text-3xl font-bold dark:text-white m-4 mb-2 text-center">
                Recall Details
              </h2>
            </div>

            <section class="incident-section">
              <h2 class="incident-section-title">{recall.title}</h2>

              <p>
                <strong>Recall Date:</strong> {recall.date}
              </p>
              <p>
                <strong>Recall Description:</strong> {recall.summary}
              </p>
            </section>
          </div>
        </>
      )}
    </main>
  );
}
