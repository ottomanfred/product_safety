import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";

export default function BottomNavbar({ setResult }) {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const returnHome = () => {
    setResult("");
    navigate("/");
  };

  const returnBarcode = () => {
    navigate("/barcode");
  };

  const returnLogin = () => {
    token ? navigate("/profile") : navigate("/login");
  };

  function homeIcon() {
    return (
      <svg
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
      </svg>
    );
  }

  function barcodeIcon() {
    return (
      <svg
        class="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
      >
        <path d="M5 7h2v10H5zm9 0h1v10h-1zm-4 0h3v10h-3zM8 7h1v10H8zm8 0h3v10h-3z" />
        <path d="M4 5h4V3H4c-1.103 0-2 .897-2 2v4h2V5zm0 16h4v-2H4v-4H2v4c0 1.103.897 2 2 2zM20 3h-4v2h4v4h2V5c0-1.103-.897-2-2-2zm0 16h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4z" />
      </svg>
    );
  }

  function profileIcon() {
    return (
      <svg
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    );
  }

  return (
    <div class="bottom-nav-background">
      <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
        <button
          onClick={returnHome}
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          {homeIcon()}
          <span class="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={returnBarcode}
            data-tooltip-target="tooltip-new"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            {barcodeIcon()}
            <span class="sr-only">New item</span>
          </button>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          onClick={returnLogin}
          data-tooltip-target="tooltip-profile"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          {profileIcon()}
          <span class="sr-only">Profile</span>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}
