import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu.js";
import "../sidemenu.css";

const routes = [
  {
    path: "/file-manager",
    name: "File Manager",

  },
  // Add more routes as needed
];

const Sidebarmob = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`main-container ${isOpen ? "open" : "closed"}`}>
      <motion.div
        animate={{
          width: isOpen ? "250px" : "40px", background: isOpen ? "grey" : "transparent",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        style={{ zIndex: 1000 }}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="logo"
              >
                Search History
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  isOpen={isOpen}
                  key={index}
                />
              );
            }
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                {isOpen && <div className="link_text">{route.name}</div>}
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebarmob;
