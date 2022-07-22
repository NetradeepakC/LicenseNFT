import HomePage from "./Pages/HomePage";
import Account from "./Pages/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedinLanding from "./Pages/LoggedinLanding";
import RegisterPage from "./Pages/RegisterPage";
import NewNFT from "./Pages/NewNFT";
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
          <Route path="/login" element={<Account />}></Route>
          <Route path="/landing" element={<LoggedinLanding />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/new" element={<NewNFT/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
