import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
