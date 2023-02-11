import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const LoginUsingGoogle = () => {
  return (
    <div>
      <h1>Login Using Google</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          alert(JSON.stringify(credentialResponse));
        }}
        onError={(err) => {
          alert(JSON.stringify(err));
        }}
      />
    </div>
  );
};

export default LoginUsingGoogle;
