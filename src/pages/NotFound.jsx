const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        color: "#334155",
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        style={{ marginBottom: 24 }}
      >
        <circle cx="12" cy="12" r="10" fill="#f87171" />
        <path
          d="M9.17 9.17a3 3 0 0 1 5.66 0M9 15h6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <h1 style={{ fontSize: "3rem", marginBottom: 8 }}>404</h1>
      <h2 style={{ fontWeight: 500, marginBottom: 16 }}>Page Not Found</h2>
      <p style={{ maxWidth: 360, textAlign: "center", marginBottom: 32 }}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          padding: "10px 24px",
          background: "#2563eb",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: 500,
          boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
        }}
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
