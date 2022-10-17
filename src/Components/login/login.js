import React, { useContext } from "react";
import { useRecoilState, atom, useRecoilValue } from "recoil";
import "../../index.css";
import {
  registerEmailState as registerEmailAtom,
  registerPasswordState as registerPasswordAtom,
  loginEmailState as loginEmailAtom,
  loginPasswordState as loginPasswordAtom,
  confirmationPasswordState as confirmationPasswordAtom,
} from "../../atom";
import { auth } from "../../firebase-config";
import { AuthContext } from "../../Auth";

const Login = ({ register, logout, login, passwordError }) => {
  const [registerEmail, setRegisterEmail] = useRecoilState(registerEmailAtom);
  const [registerPassword, setRegisterPassword] =
    useRecoilState(registerPasswordAtom);
  const [loginEmail, setLoginEmail] = useRecoilState(loginEmailAtom);
  const [loginPassword, setLoginPassword] = useRecoilState(loginPasswordAtom);
  const [confirmPassword, setConfirmPassword] = useRecoilState(
    confirmationPasswordAtom
  );
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="row login-page">
      <div className="login col-5 col-sm-8 col-md-6 col-lg-4 mt-5 mx-auto border">
        <h3 className="mt-3">Register User</h3>
        {passwordError && (
          <div className="alert alert-danger" role="alert">
            {" "}
            Passwords don't match{" "}
          </div>
        )}
        <input
          placeholder="Email..."
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          className="mt-3"
          placeholder="Password..."
          type="password"
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <input
          className="mt-3"
          placeholder="Confirm Password.... "
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        ></input>
        <button className="mt-3 mb-2 btn btn-primary" onClick={register}>
          Create User
        </button>
      </div>
      <div className="login col-5  col-sm-8 col-md-6 col-lg-4 mx-auto mt-5 border ">
        <h3 className="mt-3">Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          className="mt-3"
          placeholder="Password..."
          type="password"
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button className="mt-3 mb-2 btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
      <div className="login mt-4">
        <h4>User logged in:</h4>
        {currentUser?.email}
        <button className="mt-4 mb-4" onClick={logout}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Login;
