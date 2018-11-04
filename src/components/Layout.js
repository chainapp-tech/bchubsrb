import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./all.scss";

const LayoutWrapper = ({ children }) => (
  <div>
    <Helmet title="EU Blockchain Hub | Serbia" />
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default LayoutWrapper;
