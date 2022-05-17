import React from "react";
import { SignInContainer } from "./SignInStyles";
import WhatsappIcon from "../../img/whatsapp.svg";
import { green1 } from "../../styles/GlobalStyles";

const SignIn = () => {
  return (
    <SignInContainer colors={green1}>
      <img className="WhatsappIcon" src={WhatsappIcon} alt="whatsapp" />
      <h2>Sign in to Keloke-app</h2>
      <a href="#">Sign in with google</a>
    </SignInContainer>
  );
};

export default SignIn;
