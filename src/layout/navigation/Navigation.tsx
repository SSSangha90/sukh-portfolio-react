import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar } from "./Navigation.style";
import { links } from "./utils";

const Navigation: React.FC = () => {
  const location = useLocation();

  const routes = useMemo(() => {
    return links.filter((l) => l.url !== location.pathname);
  }, [location.pathname]);

  return (
    <Navbar className="crossfade">
      <div className="row">
        <ul className="main-nav">
          {routes.map((r) => (
            <li key={r.title}>
              <Link to={r.url}>{r.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Navbar>
  );
};

export default Navigation;
