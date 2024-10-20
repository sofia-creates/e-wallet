import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
        {/* wrapping inside main for styling purposes */}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
