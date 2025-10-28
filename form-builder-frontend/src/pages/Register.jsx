import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { Input, Button, Card, message } from "antd";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      message.success("Registration successful!");
    } else {
      message.error(error || "Failed to register");
    }
  };

  return (
    <div className="auth-container">
      <Card title="Register" style={{ width: 400, margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Full Name" onChange={handleChange} />
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input.Password
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Input.Password
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            style={{ marginTop: "10px" }}
          >
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
