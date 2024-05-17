import styles from "./corp-layout.module.scss";
// import Footer from '../footer/footer.tsx';
import {Outlet} from "react-router-dom";
import CorpHeader from "../corp-header/corp-header.tsx";

function CorpLayout() {
  return (
    <div className={styles.layout}>
      <CorpHeader/>
      <Outlet/>
      {/*<Footer/>*/}
    </div>
  );
}

export default CorpLayout;
