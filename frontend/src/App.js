// IMPORTS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { useLinksContext } from "./hooks/useLinksContext";


//PAGES
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useEffect } from "react";


function App() {
  //DISPATCH
  const { link, dispatch: linksDispatch } = useLinksContext();
  // AUTH
  const { user } = useAuthContext();

  // ALL LINKS
  //ALL TASKS
  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch("/api/links");
      const json = await response.json();

      if (response.ok) {
        linksDispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchLinks();
  }, [linksDispatch]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/dashboard" element={!user ? <Login /> : <Dashboard user={user} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
