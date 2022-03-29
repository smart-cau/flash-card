import classNames from 'classnames';
import { Navigations } from 'constants/navigationData';
import Link from 'next/link';
import { CgMonday } from 'react-icons/cg';

import styles from './Navbar.module.css';

interface Props {
  navigationData: Navigations;
  currentRoute: string;
  setCurrentRoute: (link: string) => void;
}

export default function NavBar({
  navigationData,
  currentRoute,
  setCurrentRoute,
}: Props) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <CgMonday />
      </span>
      <ul className={styles.navItems}>
        {navigationData.map((item, index) => (
          <Link href={item.link} key={index}>
            <a
              className={classNames([
                styles.navItem,
                currentRoute === item.name && styles.selectedNavItem,
              ])}
              onClick={() => setCurrentRoute(item.name)}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </ul>
      <button className={styles.actions}>Login</button>
    </nav>
  );
}
