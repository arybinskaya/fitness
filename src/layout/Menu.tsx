import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginRight: "20px", marginLeft: "60px" }}>
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "2em",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
