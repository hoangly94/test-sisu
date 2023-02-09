import Logo from '@/partials/Logo';
import styles from './styles.module.css';
import SOCIALS from '@/constants/socials';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.logo} href='/'>
        <Logo />
      </a>
      <div className={styles.copyRight}>Sisu, Inc. © 2022 All rights reserved.</div>
      <ul className={styles.socials}>
        {
          SOCIALS.map((social, socialIndex) => (
            <li key={socialIndex}>
              <a href={social.href}>
                <img src={social.imgURL} alt={social.name} />
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Footer