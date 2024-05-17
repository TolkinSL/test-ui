// import {NavLink} from 'react-router-dom';
import styles from './main-aside.module.scss'
// import cn from 'classnames';
import { ScrollArea } from '@mantine/core';
import { LinksGroup } from '../navbar-links-group/navbar-links-group.tsx';
// import { Logo } from './Logo';
import {Icon1} from "../../assets/icon1.tsx";
import {Icon2} from "../../assets/icon2.tsx";
import {Icon3} from "../../assets/icon3.tsx";
// import styles from './NavbarNested.module.css';

const mockdata = [
  {
    label: 'Инспекционное оборудование',
    icon: Icon1,
    // initiallyOpened: true,
    links: [
      { label: 'Чеквейеры (проверка веса)', link: '/check' },
      { label: 'Металлодетекторы', link: '/metal' },
      { label: 'Рентгендетекторы', link: '/rentgen' },
      { label: 'Фотосепараторы', link: '/foto' },
    ],
  },
  {
    label: 'Фасовочно-упаковочное оборудование',
    icon: Icon2,
    links: [
      { label: 'Упаковочные линии', link: '/upakovka' },
      { label: 'Вертикальные фасовочно-упаковочные комплексы', link: '/upakovka_vertical' },
      { label: 'Горизонтальные упаковочные машины', link: '/upakovka_horizontal' },
      { label: 'Термоупаковочное оборудование (термоусадочное)', link: '/upakovka_termo' },
    ],
  },
  {
    label: 'Оборудование для промышленной маркировки',
    icon: Icon3,
    links: [
      { label: 'Электрокаплеструйные маркираторы', link: '/mark' },
      { label: 'Комплексы для маркировки яйца', link: '/mark_eggs' },
      { label: 'Термопринтеры', link: '/termoprinter' },
    ],
  },
];

function MainAside() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={styles.navbar}>
      <ScrollArea className={styles.links} type="auto">
        <div className={styles.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}

export default MainAside;
