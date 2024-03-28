import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import "../index.css";
import { useState } from "react";

export default function Root() {
  const [result, setResult] = useState("");

  return (
    <>
      <main>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <Outlet context={[result, setResult]} />
      </main>
      <BottomNavbar setResult={setResult} />
    </>
  );
}
