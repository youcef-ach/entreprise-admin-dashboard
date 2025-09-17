import { Outlet } from "react-router-dom";

function global() {
  console.log("doing some checks");

  return (
    <div>
      
      <Outlet />
    </div>
  );
}

export default global;