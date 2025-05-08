import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div style={styles.container}>
      <h1>Simple Counter App</h1>
      <Counter />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default App;
