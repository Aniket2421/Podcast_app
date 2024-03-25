import React, { useState } from "react";
import Navbar from "../Componet/Header/Navbar";

import Signupform from "../Componet/SignuoComponet/LoginForm/SignForm";
import Loginform from "../Componet/SignuoComponet/LoginForm/LoginForm";

const Signup = () => {

    const [flag, setFlag] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="input-wrapper">
                {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
                {!flag ? <Signupform /> : <Loginform />}
                {!flag ? (
                    <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
                        Already have an Account? Click here to Login
                    </p>
                ) : (
                    <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
                        Don't have an account? Click here to Signup{" "}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Signup;
