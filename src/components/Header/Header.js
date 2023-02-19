import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSS0U06xpwTAOway8VB9uoXbHIU8vOPi6cGhVVgbAwwto0rlJO1Qouuzy8OVqiRHLbdI&usqp=CAU"
        alt="tinder-logo"
      />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
