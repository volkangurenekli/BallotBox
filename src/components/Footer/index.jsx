import React from "react";
import "./style.css";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer>
      <div>DeFacto Case Study</div>
      <div>Volkan Gürenekli</div>
      <div>
        <a href="tel:+905439170212" target="new">
          <img className="icon" src="assets/phone.svg" alt="phone" />
        </a>

        <a href="mailto:volkangurenekli@gmail.com" target="new">
          <img className="icon" src="assets/gmail.svg" alt="gmail" />
        </a>

        <a href="https://www.linkedin.com/in/volkangurenekli/" target="new">
          <img className="icon linkedin" src="assets/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </Footer>
  );
};

export default AppFooter;
