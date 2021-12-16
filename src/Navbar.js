import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Navbar ${show && "Nav-black"}`}>
      <img
        className="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="NadavsFlix"
      />
      <img
        className="profile-image "
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="ProfileImage"
      />
    </div>
  );
}

export default Navbar;
