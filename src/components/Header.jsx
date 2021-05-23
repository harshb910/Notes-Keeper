import React from "react";
import NotesTwoToneIcon from "@material-ui/icons/NotesTwoTone";

function Header() {
  return (
    <header>
      <h1>
        <NotesTwoToneIcon style={{ fontSize: "30px" }} />
        Note-Keeper
      </h1>
    </header>
  );
}

export default Header;
