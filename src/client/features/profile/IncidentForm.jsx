import { useState } from "react";
import { useAddIncidentMutation } from "../reports/incidentSlice";

export default function IncidentForm() {
  const [brand, setBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [upc, setUpc] = useState("");
  const [addIncident] = useAddIncidentMutation();

  const create = async (evt) => {
    evt.preventDefault();
    addIncident({ brand, productDescription, incidentDescription, upc });
  };

  return (
    <form class="form" onSubmit={create}>
      <label>Brand:</label>
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <label>Product Description:</label>
      <input
        type="text"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        required
      />
      <label>Incident Description:</label>
      <input
        type="text"
        value={incidentDescription}
        onChange={(e) => setIncidentDescription(e.target.value)}
        required
      />
      <label>UPC:</label>
      <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
      <button>Submit Incident</button>
    </form>
  );
}
