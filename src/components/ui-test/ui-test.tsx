// import {NavLink} from 'react-router-dom';
import styles from './ui-test.module.scss'
// import cn from 'classnames';
import {Space, Pagination} from '@mantine/core';

function UiTest() {
  return (
    <div className={styles.main}>
      <Space h="md"/>
      <Pagination total={10} classNames={{control: styles.control}}/>
    </div>
  )
}

export default UiTest;
