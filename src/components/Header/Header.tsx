import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/speedpost_logo_red.svg";

function Header({absolute} : {absolute: Boolean}) {
  return (
    <>
      <div className={`${absolute ?  "absolute top-0" : ""} h-[5em] flex`}>
        <Image className="h-full w-fit" src={Logo} alt="SpeedPost Logo" />
      </div>
    </>
  );
}

export default Header;
