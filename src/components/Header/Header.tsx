import styles from "./Header.module.css";
import {
  HeaderNavList,
  HeaderNavActions,
  HeaderNavBrand,
  HeaderMobile,
} from "./index";

import { useState } from "react";

const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const handleMobileBtnClick = () => {
    setMobileActive((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderNavBrand />
        <HeaderNavList
          mobileActive={mobileActive}
          onHide={handleMobileBtnClick}
        />
        <HeaderNavActions />
        <HeaderMobile
          onClick={handleMobileBtnClick}
          mobileActive={mobileActive}
        />
      </nav>
    </header>
  );
};

export default Header;
