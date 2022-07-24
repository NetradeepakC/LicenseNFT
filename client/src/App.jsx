import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedinLanding from "./Pages/LoggedinLanding";
import RegisterPage from "./Pages/RegisterPage";
import NewNFT from "./Pages/NewNFT";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage typeOfLogin="customer" />}
          ></Route>
          <Route
            path="/company"
            element={<HomePage typeOfLogin="company" />}
          ></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/landing" element={<LoggedinLanding />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/new" element={<NewNFT />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
