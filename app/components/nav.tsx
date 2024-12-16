import React, { useState, useEffect } from "react";
import "../css/navigation.css";

export default function Nav() {
  // State to manage the drawer's visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClientLoginClick = (e: Event) => {
    // Prevent the default action
    e.preventDefault();

    if (window.innerWidth > 1024) {
      // Desktop: Open the drawer
      setIsDrawerOpen(true);
    } else {
      // Mobile: Open the iframe URL in a new tab
      const iframeSrc = document.getElementById("clientLoginFrame").src;
      window.open(iframeSrc, "_blank");
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleExpandDrawer = () => {
    const iframeSrc = document.getElementById("clientLoginFrame").src;
    window.open(iframeSrc, "_blank");
  };

  useEffect(() => {
    // You can add any logic here that needs to run on component mount
    // such as checking the window size and updating state, etc.
    const resizeListener = () => {
      if (window.innerWidth > 1024 && !isDrawerOpen) {
        setIsDrawerOpen(false); // Close drawer on resize if on desktop
      }
    };

    // Add event listener for resizing
    window.addEventListener("resize", resizeListener);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 shadow-md">
        <a href="/">
          <img
            src="/static/images/logo.png"
            alt="Logo"
            style={{ height: "25px", width: "auto" }}
          />
        </a>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleClientLoginClick as any}
            className="rounded bg-pink-600 px-5 py-1 text-white transition-colors hover:bg-pink-700"
          >
            Client Portal
          </button>
        </div>
      </nav>

      {/* Drawer */}
      {isDrawerOpen && (
        <div
          id="drawer"
          className="fixed right-0 top-0 z-50 h-full sm:w-full md:w-full lg:w-1/3"
        >
          <div className="drawer-header flex justify-between bg-gray-900 p-4">
            <button onClick={handleExpandDrawer} className="text-gray-300">
              <i className="fas fa-external-link-alt"></i>
            </button>

            <button onClick={handleCloseDrawer} className="text-gray-300">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="drawer-content h-full w-full">
            <iframe
              id="clientLoginFrame"
              src="https://zephtech.servicedesk.atera.com"
              frameBorder="0"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
