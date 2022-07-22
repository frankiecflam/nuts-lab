import styles from "./Header.module.css";
import {
  HeaderNavList,
  HeaderNavActions,
  HeaderNavBrand,
  HeaderMobile,
} from "./index";

import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const { pathname } = useRouter();

  const handleMobileActiveToggle = () => {
    setMobileActive((prevState) => !prevState);
  };

  return (
    <header
      className={
        pathname !== "/" ? `${styles.header} ${styles.bgWhite}` : styles.header
      }
    >
      <nav className={styles.nav}>
        <HeaderNavBrand
          mobileActive={mobileActive}
          onHide={handleMobileActiveToggle}
        />
        <HeaderNavList
          mobileActive={mobileActive}
          onHide={handleMobileActiveToggle}
        />
        <HeaderNavActions
          mobileActive={mobileActive}
          onHide={handleMobileActiveToggle}
        />
        <HeaderMobile
          mobileActive={mobileActive}
          onMobileBtnClick={handleMobileActiveToggle}
        />
      </nav>
    </header>
  );
};

export default Header;
