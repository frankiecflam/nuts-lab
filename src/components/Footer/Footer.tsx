import styles from "./Footer.module.css";
import Container from "../UI/Container";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/Icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContent}>
        <div className={styles.contact}>
          <h1 className={styles.contactHeading}>contact us</h1>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <p className={styles.contactItemTitle}>email:</p>
              <p className={styles.contactItemContent}>
                <Link href="mailto:hello@nutslab.com">hello@nutslab.com</Link>
              </p>
            </li>
            <li className={styles.contactItem}>
              <p className={styles.contactItemTitle}>phone:</p>
              <p className={styles.contactItemContent}>
                <Link href="tel:07323137160">+44 0732 313 7160</Link>
              </p>
            </li>
            <li className={styles.contactItem}>
              <p className={styles.contactItemTitle}>address:</p>
              <p className={styles.contactItemContent}>
                23 High St, London NW3 5BU
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <Link href="https://www.facebook.com/">
                <a href="https://www.facebook.com/" target="_blank">
                  <FacebookIcon />
                </a>
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link href="https://www.twitter.com/">
                <a href="https://www.twitter.com/" target="_blank">
                  <TwitterIcon />
                </a>
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link href="https://www.instagram.com/">
                <a href="https://www.instagram.com/" target="_blank">
                  <InstagramIcon />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
