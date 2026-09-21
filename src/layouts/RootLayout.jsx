import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  const location = useLocation();

  // Refresh হলে same page-এর top এ থাকবে
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  // অন্য page এ গেলে top এ যাবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
