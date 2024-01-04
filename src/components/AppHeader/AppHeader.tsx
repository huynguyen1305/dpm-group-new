import { NavLink } from "react-router-dom";

import logo from "@/assets/images/logo-dmp.png";
import BurgerIcon from "@/assets/icons/burgerMenu.svg?react"; //remember add ?react

import styles from "./AppHeader.module.scss";
import { cn } from "@/utils/twClassname";

const navBars = [
  {
    name: "Trang Chủ",
    path: "/",
  },
  {
    name: "Về Chúng Tôi",
    path: "/gioi-thieu",
  },
  {
    name: "Lĩnh vực hoạt động",
    path: "/linh-vuc-hoat-dong",
  },
  {
    name: "Các Dự Án",
    path: "/du-an",
  },
  {
    name: "Liên Hệ",
    path: "/lien-he",
  },
];

const AppHeader = () => {
  return (
    <header className={cn(styles.headerWrapper, "text-white px-4")}>
      <div>
        <nav className="w-full flex justify-between">
          {navBars.map((navbar) => (
            <NavLink key={navbar.name} to={navbar.path} className="mr-4">
              {navbar.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div style={{ height: "100%", padding: "8px" }}>
        <img src={logo} alt="DPM Group" className="w-full h-full" />
      </div>

      <div>
        <BurgerIcon />
      </div>
    </header>
  );
};

export default AppHeader;
