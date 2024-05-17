import styles from "./corp-main.module.scss";
import {Outlet} from "react-router-dom";
import MainHeader from "../main-header/main-header.tsx";
import MainFooter from "../main-footer/main-footer.tsx";
import MainAside from "../main-aside/main-aside.tsx";

function CorpMain() {
  return (
    <div className={styles.layout}>
      <MainHeader />
      <div className={styles.main}>
        <MainAside />
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
}

export default CorpMain;
