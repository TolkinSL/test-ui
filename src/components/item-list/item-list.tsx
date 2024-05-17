import {useParams} from "react-router-dom";
// import {NavLink} from 'react-router-dom';
import styles from './item-list.module.scss'
// import cn from 'classnames';

function ItemList() {
  const {id } = useParams<"id">();
  return (
    <div className={styles.main}>
      <h1 className={styles.caption}>{`EndPoint - ${id}`}</h1>
    </div>
  )
}

export default ItemList;
