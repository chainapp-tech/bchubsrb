import React from "react";
import Headroom from "react-headroom";

import MainMenu from "../mainmenu/MainMenu";

const Header = () => (
  <header>
    <Headroom>
      <MainMenu />
    </Headroom>
  </header>
);
export default Header;
