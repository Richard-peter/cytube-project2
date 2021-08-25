import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/actions/auth.action";
import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__name">cyTube</h1>
        <i className="fab fa-typo3"></i>
        {/* <img
          src="http://iconsetc.com/icons-watermarks/simple-ios-blue-gradient/social-media/social-media_youtube/social-media_youtube_simple-ios-blue-gradient_512x512.png"
          alt=""
        /> */}

        <button onClick={handleLogin}>Login with google</button>
        <p>Make sure to login with your google id</p>
      </div>
    </div>
  );
};

export default LoginScreen;
