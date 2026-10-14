export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ color: "#ef2222", fontSize: "48px" }}>
        LEGEND ROLEPLAY
      </h1>

      <p style={{ fontSize: "18px", color: "#cccccc" }}>
        Welcome to Legend RolePlay
      </p>

      <a
        href="https://discord.gg/arhyk5Vwq"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "24px",
          padding: "14px 28px",
          background: "#ef2222",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Join Our Discord
      </a>
    </main>
  );
}
