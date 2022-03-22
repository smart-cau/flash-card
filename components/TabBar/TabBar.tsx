import classNames from 'classnames';
import { CARDS, CREATE, HOME, PROFILE } from 'constants/navigationData';
import { useCallback } from 'react';
import { AiFillCompass, AiFillHome } from 'react-icons/ai';
import { BsFillBagFill, BsFillPersonFill } from 'react-icons/bs';

import styles from './Tabbar.module.css';
function TabBar({ navigationData, currentRoute, setCurrentRoute }) {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case HOME:
        return <AiFillHome />;
      case CARDS:
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
        <span
          key={index}
          className={classNames([
            styles.tabItem,
            currentRoute === item && styles.tabItemActive,
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className={styles.icon}>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
}

export default TabBar;
