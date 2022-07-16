import HomePage from "./Pages/HomePage";
import Account from "./Pages/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedinLanding from "./Pages/LoggedinLanding";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
