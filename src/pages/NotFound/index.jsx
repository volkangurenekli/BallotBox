import React from "react";
import "./style.css";

const NotFound = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);

  return <img className="notfound" src="assets/notfound.svg" alt="notfound" />;
};

export default NotFound;
