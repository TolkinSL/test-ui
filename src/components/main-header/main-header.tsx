// import {NavLink} from 'react-router-dom';
import styles from './main-header.module.scss'
// import cn from 'classnames';

function MainHeader() {
  return (
    <div className={styles.main}>
      <h2 className={styles.caption}>Header</h2>
      {/*<nav className={styles.navbar}>*/}
      {/*  <NavLink to='/' className={({isActive}) => cn(styles.link, {[styles.link_active]: isActive})}>Главная</NavLink>*/}
      {/*  <NavLink to='/corp' className={({isActive}) => cn(styles.link, {[styles.link_active]: isActive})}>Корпоративный сайт</NavLink>*/}
      {/*</nav>*/}
    </div>
  )
}

export default MainHeader;
