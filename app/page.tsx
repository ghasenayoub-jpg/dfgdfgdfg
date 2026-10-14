export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#ed1c24",
          fontSize: "clamp(38px, 7vw, 76px)",
          fontWeight: 900,
          letterSpacing: "4px",
          marginBottom: "12px",
        }}
      >
        LEGEND ROLEPLAY
      </h1>

      <p style={{ color: "#ccc", fontSize: "18px" }}>
        Welcome to Legend RolePlay
      </p>

      <a
        href="https://discord.gg/arhyk5Vwq"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "28px",
          padding: "15px 32px",
          background: "#ed1c24",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "0.2s",
        }}
      >
        JOIN OUR DISCORD
      </a>
    </main>
  );
}
