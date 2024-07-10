import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../FireBase';

const auth = getAuth(app);
const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignInButton = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                alert("Login Success...")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>

            <form action="">
                <h1>Sign In</h1>
                <div>
                    <label htmlFor="">E-Mail</label>
                    <input type="email" name="" id="" onChange={(ev) => setEmail(ev.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" onChange={(ev) => setPassword(ev.target.value)} />
                </div>
                <div>
                    <button type='button' onClick={SignInButton}>Sign Up</button>
                </div>
            </form>

        </div>
    )
}

export default SignIn
