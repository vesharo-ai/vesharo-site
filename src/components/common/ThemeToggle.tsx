import React, { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute("data-theme") as "dark" | "light";
    if (current) {
      setTheme(current);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("vesharo-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={`tz-theme-toggle ${className}`}
        aria-label="Toggle theme"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <i className="ph ph-moon" style={{ fontSize: "18px" }} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`tz-theme-toggle ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
        border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.1)",
        color: theme === "dark" ? "#00D2FF" : "#0066FF",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      {theme === "dark" ? (
        <i className="ph ph-sun" style={{ fontSize: "18px" }} />
      ) : (
        <i className="ph ph-moon" style={{ fontSize: "18px" }} />
      )}
    </button>
  );
}
