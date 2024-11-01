"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import GithubLogo from "../../../../public/assets/github-142-svgrepo-com.svg";
import GoogleLogo from "../../../../public/assets/google-178-svgrepo-com.svg";
import Image from "next/image";

function LoginButtons() {

  const { data: session } = useSession();

  const buttonStyling = "flex h-[3em] w-full max-w-[30em] overflow-hidden items-center justify-center bg-[rgb(255,255,255,0.1)] py-3 px-10 gap-3  mt-4 rounded-full";
  const imageStyling = "h-[1.4em] w-fit";

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="flex flex-col ">
        <button className={buttonStyling} onClick={() => signIn("google")}>
          <Image className={imageStyling} src={GoogleLogo} alt={"Google Logo"} />
          <p>Login with Google</p>
        </button>
        <button className={buttonStyling} onClick={() => signIn("github")}>
          <Image className={imageStyling} src={GithubLogo} alt={"Google Logo"} />
          <p>Login with Github</p>
        </button>
      </div>
    </>
  );
}

export default LoginButtons;
