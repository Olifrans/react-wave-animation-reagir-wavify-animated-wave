import Wave from "react-wavify";
import "./App.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Animação de Onda em React</h1>

      <Wave
        fill="#1277b0"
        paused={false}
        options={{
          height: 70,
          amplitude: 45,
          speed: 0.25,
          points: 6
        }}
      />
    </>
  );
}

export default App;
