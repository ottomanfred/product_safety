export default function SearchForm({ reportsSearch, setReportsSearch }) {
  return (
    <div className="reports_search">
      <label>
        Search for a report:
        <input
          className="search_reports"
          type="text"
          value={reportsSearch}
          onChange={(e) => setReportsSearch(e.target.value)}
          required
        />
      </label>
    </div>
  );
}
