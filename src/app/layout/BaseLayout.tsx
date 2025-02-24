import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/Navbar";

function BaseLayout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default BaseLayout;
