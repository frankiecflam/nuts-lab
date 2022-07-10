import Link from "next/link";
import Image from "next/image";
import { Logo_Black } from "../../assets/Images/Logos/index";
import styles from "./HeaderNavBrand.module.css";

const HeaderNavBrand = () => {
  return (
    <div className={styles.navBrand}>
      <Link href="/">
        <a>
          <Image
            src={Logo_Black}
            width={96}
            height={96}
            layout="fixed"
            alt="website logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default HeaderNavBrand;
