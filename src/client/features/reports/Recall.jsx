import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetRecallQuery } from "./recallSlice";

export default function Recall() {
  const { id } = useParams();
  const { data: recall, isLoading: recallLoading } = useGetRecallQuery(id);

  const navigate = useNavigate();

  return (
    <>
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
              </div>
              <p>{recall.date}</p>
              <p>{recall.summary}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
