import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGetIncidentQuery } from "./incidentSlice";

export default function Incident() {
  const { id } = useParams();
  const { data: incident, isLoading: incidentLoading } =
    useGetIncidentQuery(id);

  const navigate = useNavigate();

  return (
    <>
      {incidentLoading ? (
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
            key={incident.id}
          >
            <div className="card-body">
              <h2 className="text-3xl font-bold dark:text-white m-2.5 text-center">
                Incident Report Details
              </h2>

              {/* <div className="flex">
                <div class="border-2 border-yellow-400 text-yellow-400 rounded-md w-20 text-center">
                  Incident
                </div>
              </div> */}

              <section class="incident-section">
                <h2 class="incident-section-title">Product Details</h2>
            
                <p><strong>Product Description:</strong> {incident.productDescription}</p>
                <p><strong>Manufacturer Name:</strong> {incident.manufacturer}</p>
                <p><strong>Brand Name:</strong> {incident.brand}</p>
                <p><strong>Model Name or Number:</strong> {incident.model}</p>
                <p><strong>Serial Number:</strong> {incident.serialNumber}</p>
                <p><strong>UPC Code:</strong> {incident.upc}</p>
                <p><strong>Retailer:</strong> {incident.retailer}</p>
                <p><strong>Reatailer State:</strong> {incident.state}</p>
                <p><strong>Purchase Date:</strong> {incident.purchaseDate}</p>
                <p><strong>Product Category</strong> {incident.productCategory}</p>
                <p><strong>Product Type:</strong> {incident.productType}</p>
                <p><strong>Product Code:</strong> {incident.productCode}</p>
 
   
              </section>

              <section class="incident-section">
                <h2 class="incident-section-title">Incident Details</h2>
                <p><strong>Incident Description:</strong> {incident.incidentDescription}</p>
                <p><strong>Report Date:</strong> {incident.reportDate}</p>
                <p><strong>Incident State:</strong> {incident.state}</p>
              </section>

              <section class="incident-section">
                <h2 class="incident-section-title">Victims Involved</h2>
                <p><strong>Victim Gender:</strong> {incident.victimGender}</p>
                <p><strong>Victim Age:</strong> {incident.victimAge}</p>
              </section>

              <section class="incident-section">
                <h2 class="incident-section-title">Comments from Manufacturer</h2>
                <p>{incident.companyComment}</p>
              </section>


              {/* <div className="card-actions justify-end"></div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
