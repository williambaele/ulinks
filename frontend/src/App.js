//PAGES
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// IMPORTS

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";

function App() {
  // AUTH
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
