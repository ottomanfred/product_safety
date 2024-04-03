import React from "react";

export default function Pagination({ page, setPage }) {
  return (
    <div className="join flex justify-center">
      <button
        onClick={() => setPage(page === 1 ? 1 : page - 1)}
        className="join-item btn"
      >
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button onClick={() => setPage(page + 1)} className="join-item btn">
        »
      </button>
    </div>
  );
}
