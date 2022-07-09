import CircularGradient from "./Componenets/CircularGradient";
import Hero from "./Componenets/Hero";
function App() {
  return (
    <>
      <div className="container bg-mainBg">
        <CircularGradient />
        <Hero name="Customer" />
      </div>
    </>
  );
}

export default App;
