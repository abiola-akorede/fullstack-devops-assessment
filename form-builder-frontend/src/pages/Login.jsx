import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message, Button, Input, Card } from "antd";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      message.warning("Please enter your email and password");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login", // ✅ your Laravel API URL
        { email, password }
      );

      // Laravel usually returns something like: { token: "...", user: {...} }
      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        message.success("Login successful!");
        navigate("/form-builder");
      } else {
        message.error("No token returned. Check API response.");
      }
    } catch (error) {
      console.error(error.response?.data);
      message.error(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <Card title="Login" style={{ width: 350, textAlign: "center" }}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button
          type="primary"
          onClick={handleLogin}
          loading={loading}
          block
        >
          Login
        </Button>

        <p style={{ marginTop: "10px" }}>
          Don’t have an account?{" "}
          <a href="/register">Register</a>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../features/auth/authSlice";
// import { Input, Button, Card, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(loginUser(form));
//     if (loginUser.fulfilled.match(result)) {
//       message.success("Login successful!");
//       navigate("/form-builder");
//     } else {
//       message.error(error || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <Card title="Login" style={{ width: 400, margin: "auto" }}>
//         <form onSubmit={handleSubmit}>
//           <Input name="email" placeholder="Email" onChange={handleChange} />
//           <Input.Password
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//           />
//           <Button
//             type="primary"
//             htmlType="submit"
//             loading={loading}
//             block
//             style={{ marginTop: "10px" }}
//           >
//             Login
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;
