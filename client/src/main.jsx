import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </Router>
  // <React.StrictMode>
  // </React.StrictMode>
)
