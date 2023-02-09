import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Menu = () => {
  const router = useRouter();
  const paths = router.asPath.split('/');

  const menuItems = [
    {
      label: 'Home',
      href: ''
    },
    {
      label: 'Road Map',
      href: 'road-map'
    },
  ];

  return (
    <div className={styles.menu}>
      {
        menuItems.map((menuItem, index)=>(
          <a 
          key={index} 
          href={`/${menuItem.href}`}
          className={classNames(
            paths[1] === menuItem.href && styles.active
          )}
          >
            {menuItem.label}
          </a>
        ))
      }
    </div>
  );
};

export default Menu;
