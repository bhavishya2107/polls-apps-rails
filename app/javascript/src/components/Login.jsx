import React, { useState } from "react";

import LoginForm from "components/Authentication/LoginForm";
import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";
import { setToLocalStorage } from "helpers/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authApi.login({ login: { email, password } });
      setToLocalStorage({
        authToken: response.data.auth_token,
        email,
        userId: response.data.userId,
      });
      setAuthHeaders();
      setLoading(false);
      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      setErrors(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
