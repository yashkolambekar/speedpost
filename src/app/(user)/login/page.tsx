import React from "react";
import Header from "../../../components/Header/Header";
import LoginButtons from "./LoginButtons";

function Login() {

    console.log("which side");

  return (
    <>
      <Header absolute={true} />
      <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center">
            <div className="text-center">
                <p>Login into SpeedPost</p>
                <LoginButtons />
            </div>
      </div>
    </>
  );
}

export default Login;
