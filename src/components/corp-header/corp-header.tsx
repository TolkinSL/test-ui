import {NavLink} from 'react-router-dom';
import styles from './corp-header.module.scss'
import cn from 'classnames';

function CorpHeader() {
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>Тестирование компонентов</h1>
      <nav className={styles.navbar}>
        <NavLink to='/' className={({isActive}) => cn(styles.link, {[styles.link_active]: isActive})}>Главная</NavLink>
        <NavLink to='/corp' className={({isActive}) => cn(styles.link, {[styles.link_active]: isActive})}>Корпоративный сайт</NavLink>
      </nav>
    </div>
  )
}

export default CorpHeader;
