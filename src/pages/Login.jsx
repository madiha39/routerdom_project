import React from "react";
const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#333" }}>Login</h1>
      <button
        onClick={handleLogin}
        style={{
          padding: "12px 32px",
          background: "linear-gradient(90deg, #4f8cff 0%, #38e6c5 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(79,140,255,0.2)",
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
