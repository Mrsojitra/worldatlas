import React from "react";
import Footers from "../UI/Footers";
import Headers from "../UI/Headers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};

export default AppLayout;
