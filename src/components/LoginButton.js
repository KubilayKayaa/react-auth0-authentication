import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <p>Hoşgeldiniz</p>
  ) : (
    <button onClick={() => loginWithRedirect()}>Login</button>
  );
}
