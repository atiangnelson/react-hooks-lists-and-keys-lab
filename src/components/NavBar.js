import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const newList=links.map((link)=>{
  return <a key={link} href={`#${link}`}>{link}</a>
})
  return <nav>{newList}</nav>;
}

export default NavBar;
