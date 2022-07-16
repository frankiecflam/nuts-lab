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

  const handleMobileActiveToggle = () => {
    setMobileActive((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderNavBrand />
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
