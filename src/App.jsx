import About from "./Components/About/About";
import "./App.css";
import Header from "./Components/Header/header";
import Team from "./Components/Team/Team";
import Recipes from "./Components/Recipes/Recipes";
import Pricing from "./Components/Pricing/Pricing";
import Subscribe from "./Components/Subscribe/Subscribe";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Team />
      <Recipes />
      <Pricing />
      <Subscribe />
      <Contact />
    </>
  );
}

export default App;
