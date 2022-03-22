import classNames from 'classnames';
import { CgMonday } from 'react-icons/cg';

import styles from './Navbar.module.css';

export default function NavBar({
  navigationData,
  currentRoute,
  setCurrentRoute,
}) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <CgMonday />
      </span>
      <ul className={styles.navItems}>
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              styles.navItem,
              currentRoute === item && styles.selectedNavItem,
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.actions}>Login</button>
    </nav>
  );
}
