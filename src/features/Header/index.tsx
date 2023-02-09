import Logo from '@/partials/Logo';
import styles from './styles.module.css';
import Menu from './Menu';
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container} >
      <a className={styles.logo} >
          <Logo/>
          </a>
          <Menu />
      </div>
    </div>
  )
}

export default Header