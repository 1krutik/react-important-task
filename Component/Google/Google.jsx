import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../FireBase";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const Google = () => {
  const Google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Login Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <h1>Google Login</h1>
      <button onClick={Google}>Click</button>
    </div>
  );
};

export default Google;
