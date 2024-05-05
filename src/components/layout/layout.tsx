import styles from "./layout.module.scss";
import Header from "../header/header.tsx";
import Footer from '../footer/footer.tsx';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
