import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="children"> {children}</div>
    </div>
  );
};

export default Layout;
