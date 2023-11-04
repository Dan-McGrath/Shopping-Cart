const Home = () => {
  const styles = {
    maxWidth: "500px",
    textAlign: "center",
    margin: "3rem auto",
    background: "#262626",
    padding: "2rem",
    border: "1px solid #553B8C",
    borderRadius: "10px",
    color: "#D923BA",
  };

  return (
    <section className="hero" style={styles}>
      <h1 style={{ margin: "1rem", fontSize: "36px" }}>
        Welcome To Arcan Gaming
      </h1>
      <p style={{ fontSize: "20px" }}>
        Search for games of all types for purchase!
      </p>
      <p style={{ fontSize: "20px" }}>
        This is not a real site. Only a demo for what a real game shop would
        look like
      </p>
    </section>
  );
};

export default Home;
