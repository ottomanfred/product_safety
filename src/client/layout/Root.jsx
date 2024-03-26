import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";
import "../index.css";
import { useState } from "react";

export default function Root() {
  const [result, setResult] = useState("");

  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Outlet context={[result, setResult]}/>
      </main>
      <BottomNavbar setResult={setResult}/>
    </>
  );
}
