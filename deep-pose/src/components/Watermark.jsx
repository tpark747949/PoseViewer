function Watermark() {
  return (
    <div style={styles.watermark}>
      Site maintained by{" "}
      <a href="mailto:tpark747949@gmail.com" style={styles.link}>
        Taejoon Park
      </a>
      .
    </div>
  );
}

const styles = {
  watermark: {
    position: "fixed",
    bottom: 10,
    right: 10,
    fontSize: "0.9rem",
    color: "#999",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "4px 8px",
    borderRadius: "4px",
    zIndex: 1000,
    userSelect: "none",
    fontFamily: "'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Watermark;
