import React, { useState } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';

const Menu = () => {
  const router = useRouter();
  const paths = router.asPath.split('/');
  const [isVisible, setVisible] = useState(false);

  const {ref} = useClickOutside({
    clickOutsideCallback: ()=> {setVisible(false)},
    clickInsideCallback: ()=> {setVisible(true)}
  });

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
console.log(isVisible)
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.humburger} ref={ref}>
        <img src="https://sisu.network/assets/hamburger.dd7ebf99.svg" alt="Menu" />
      </div>
      <div 
      className={classNames(
        styles.menu,
        isVisible && styles.opened
      )}
      >
        {
          menuItems.map((menuItem, index) => (
            <div key={index}>
              < a
                href={`/${menuItem.href}`}
                className={classNames(
                  paths[1] === menuItem.href && styles.active
                )}
              >
                {menuItem.label}
              </a>
            </div>
          ))
        }
      </div >
    </div >
  );
};

export default Menu;
