import classNames from 'classnames';
import {
  CREATE,
  HOME,
  Navigations,
  PROFILE,
  SETS,
} from 'constants/navigationData';
import Link from 'next/link';
import { useCallback } from 'react';
import { AiFillCompass, AiFillHome } from 'react-icons/ai';
import { BsFillBagFill, BsFillPersonFill } from 'react-icons/bs';

import styles from './Tabbar.module.css';

interface Props {
  navigationData: Navigations;
  currentRoute: string;
  setCurrentRoute: (link: string) => void;
}
function TabBar({ navigationData, currentRoute, setCurrentRoute }: Props) {
  const getTabIcon = useCallback((item) => {
    switch (item.name) {
      case HOME:
        return <AiFillHome />;
      case SETS:
        return <AiFillCompass />;
      case CREATE:
        return <BsFillBagFill />;
      case PROFILE:
        return <BsFillPersonFill />;
    }
  }, []);

  return (
    <nav className={styles.tabBar}>
      {navigationData.map((item, index) => (
        <Link href={item.link} key={index}>
          <a
            key={index}
            className={classNames([
              styles.tabItem,
              currentRoute === item.name && styles.tabItemActive,
            ])}
            onClick={() => setCurrentRoute(item.name)}
          >
            <span className={styles.icon}>{getTabIcon(item)}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
}

export default TabBar;
