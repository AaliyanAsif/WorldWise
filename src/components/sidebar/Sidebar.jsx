import { Link, Outlet } from "react-router-dom";
import AppNav from "../appNav/AppNav";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
