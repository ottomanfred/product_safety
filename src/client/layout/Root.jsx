import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";
import "../index.css";
import { useState } from "react";

export default function Root() {
  const [showBarcode, setShowBarcode] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={{ showBarcode, setShowBarcode }} />
      </main>
      <BottomNavbar showBarcode={showBarcode} setShowBarcode={setShowBarcode} />
    </>
  );
}
