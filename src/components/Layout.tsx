import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="h-[70dvh] flex justify-center items-center">
      <Outlet />
    </main>
  );
};

export default Layout;
